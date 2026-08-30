import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";
import { closeSync, existsSync, openSync, readSync } from "node:fs";
import { extname, resolve, sep } from "node:path";

const sourceRoot = resolve(process.cwd(), "source");
const imageDimensionCache = new Map();

function readImageHeader(filePath, length = 524288) {
  const descriptor = openSync(filePath, "r");
  const buffer = Buffer.allocUnsafe(length);

  try {
    const bytesRead = readSync(descriptor, buffer, 0, length, 0);
    return buffer.subarray(0, bytesRead);
  } finally {
    closeSync(descriptor);
  }
}

function getJpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    return null;
  }

  const frameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
    0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
  ]);
  let offset = 2;

  while (offset + 8 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0x01) {
      offset += 2;
      continue;
    }
    if (marker === 0xd9 || marker === 0xda) break;

    const segmentLength = buffer.readUInt16BE(offset + 2);
    if (segmentLength < 2) break;

    if (frameMarkers.has(marker)) {
      return {
        width: buffer.readUInt16BE(offset + 7),
        height: buffer.readUInt16BE(offset + 5),
      };
    }

    offset += segmentLength + 2;
  }

  return null;
}

function getWebpDimensions(buffer) {
  if (
    buffer.length < 30 ||
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return null;
  }

  const format = buffer.toString("ascii", 12, 16);
  if (format === "VP8X") {
    return {
      width: buffer.readUIntLE(24, 3) + 1,
      height: buffer.readUIntLE(27, 3) + 1,
    };
  }

  if (format === "VP8L" && buffer[20] === 0x2f) {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >>> 14) & 0x3fff) + 1,
    };
  }

  if (
    format === "VP8 " &&
    buffer[23] === 0x9d &&
    buffer[24] === 0x01 &&
    buffer[25] === 0x2a
  ) {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  return null;
}

function getImageDimensions(url = "") {
  let pathname = String(url).trim().split(/[?#]/, 1)[0];
  if (!pathname || /^(?:https?:|data:|\/\/)/i.test(pathname)) return null;

  try {
    pathname = decodeURIComponent(pathname);
  } catch {}

  pathname = pathname.replace(/^\/+/, "");
  if (pathname.startsWith("allkustom.github.io/")) {
    pathname = pathname.slice("allkustom.github.io/".length);
  }

  const filePath = resolve(sourceRoot, pathname);
  if (!filePath.startsWith(`${sourceRoot}${sep}`) || !existsSync(filePath)) {
    return null;
  }

  if (imageDimensionCache.has(filePath)) {
    return imageDimensionCache.get(filePath);
  }

  let dimensions = null;

  try {
    const buffer = readImageHeader(filePath);
    const extension = extname(filePath).toLowerCase();

    if (extension === ".png" && buffer.length >= 24) {
      dimensions = {
        width: buffer.readUInt32BE(16),
        height: buffer.readUInt32BE(20),
      };
    } else if (extension === ".gif" && buffer.length >= 10) {
      dimensions = {
        width: buffer.readUInt16LE(6),
        height: buffer.readUInt16LE(8),
      };
    } else if (extension === ".jpg" || extension === ".jpeg") {
      dimensions = getJpegDimensions(buffer);
    } else if (extension === ".webp") {
      dimensions = getWebpDimensions(buffer);
    }
  } catch {}

  imageDimensionCache.set(filePath, dimensions);
  return dimensions;
}

function addImageDimensions(tag) {
  const source = tag.match(/\bsrc=(?:"([^"]*)"|'([^']*)')/i);
  const dimensions = getImageDimensions(source?.[1] ?? source?.[2] ?? "");
  if (!dimensions) return tag;

  const attributes = [];
  if (!/\swidth=/i.test(tag)) attributes.push(`width="${dimensions.width}"`);
  if (!/\sheight=/i.test(tag)) attributes.push(`height="${dimensions.height}"`);
  if (!attributes.length) return tag;

  return tag.replace(/<img\b/i, (opening) => `${opening} ${attributes.join(" ")}`);
}

export default function (eleventyConfig) {
  eleventyConfig.setInputDirectory("source");
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy("source/**/*.png");
  eleventyConfig.addPassthroughCopy("source/**/*.jpg");
  eleventyConfig.addPassthroughCopy("source/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("source/**/*.PNG");
  eleventyConfig.addPassthroughCopy("source/**/*.JPG");
  eleventyConfig.addPassthroughCopy("source/**/*.css");
  eleventyConfig.addPassthroughCopy("source/**/*.js");
  eleventyConfig.addPassthroughCopy("source/**/*.gif");
  eleventyConfig.addPassthroughCopy("source/**/*.pdf");
  eleventyConfig.addPassthroughCopy("source/**/*.mp4");
  eleventyConfig.addPassthroughCopy("source/**/*.mov");
  eleventyConfig.addPassthroughCopy("source/**/*.MOV");
  eleventyConfig.addPassthroughCopy("source/**/*.webp");

  eleventyConfig.addGlobalData("layout", "base.html");

  const md = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("md", (str = "") => md.render(str));

  const derivedMediaUrl = (url = "", suffix = ".thumb.jpg") =>
    String(url).replace(/\.[^./]+$/, suffix);

  eleventyConfig.addFilter("thumbnailImage", (url = "") =>
    derivedMediaUrl(url, ".thumb.jpg")
  );
  eleventyConfig.addFilter("thumbnailVideo", (url = "") =>
    derivedMediaUrl(url, ".thumb.mp4")
  );
  eleventyConfig.addFilter("thumbnailPoster", (url = "") =>
    derivedMediaUrl(url, ".poster.jpg")
  );

  eleventyConfig.addTransform("defer-page-media", function (content) {
    if (
      typeof this.page.outputPath !== "string" ||
      !this.page.outputPath.endsWith(".html")
    ) {
      return content;
    }

    let transformed = content.replace(/<img\b[^>]*>/gi, (tag) => {
      let image = addImageDimensions(tag);

      if (/\bdata-eager=/i.test(image) || /id="imgModalImg"/i.test(image)) {
        return image;
      }

      if (!/\bloading=/i.test(image)) {
        image = image.replace("<img", '<img loading="lazy" decoding="async"');
      }
      return image.replace(/(?<!data-)src=("[^"]*"|'[^']*')/i, "data-$&");
    });

    transformed = transformed.replace(/<iframe\b[^>]*>/gi, (tag) => {
      let iframe = tag;
      if (!/\bloading=/i.test(iframe)) {
        iframe = iframe.replace("<iframe", '<iframe loading="lazy"');
      }
      return iframe.replace(/(?<!data-)src=("[^"]*"|'[^']*')/i, "data-$&");
    });

    transformed = transformed.replace(/<video\b[\s\S]*?<\/video>/gi, (block) => {
      let video = block.replace(/\s+preload=("[^"]*"|'[^']*')/gi, "");
      video = video.replace(/<video\b/i, (tag) =>
        `${tag}${/\bdata-lazy-video\b/i.test(video) ? "" : " data-lazy-video"} preload="none"`
      );
      video = video.replace(/(?<!data-)poster=("[^"]*"|'[^']*')/gi, "data-$&");
      video = video.replace(/(?<!data-)src=("[^"]*"|'[^']*')/gi, "data-$&");
      return video;
    });

    return transformed;
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--desc-->",
  });

  eleventyConfig.addFilter("stripExcerpt", (html = "", excerptMd = "") => {
    const excerptHtml = md.render(excerptMd).trim();
    if (!excerptHtml) return html;
    return html.replace(excerptHtml, "").trim();
  });

  function normPath(p = "") {
    return String(p).replace(/\\/g, "/");
  }
  eleventyConfig.addFilter("workRelPath", (inputPath = "") => {
    const p = normPath(inputPath);

    const marker = "/1 collections/";
    const idx = p.indexOf(marker);
    if (idx === -1) return p;

    return p.slice(idx + marker.length);
  });
  
  function getFilePrefixNumberFromInputPath(inputPath) {
    const p = normPath(inputPath);
    const filename = (p.split("/").pop() || "").trim();
    const m = filename.match(/^(\d+)/);
    return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
  }

  function getGroupFromInputPath(inputPath) {
    const parts = normPath(inputPath).split("/").filter(Boolean);
    const idx = parts.indexOf("1 collections");
    if (idx === -1) return "";
    return parts[idx + 1] || "";
  }

  function groupOrderFromKey(groupKey = "") {
    const m = String(groupKey).trim().match(/^(\d+)/);
    return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
  }

  function slugify(str = "") {
    return String(str)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function titleCase(str = "") {
    return String(str)
      .trim()
      .split(/\s+/)
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
      .join(" ");
  }
eleventyConfig.addCollection("informations", (collectionApi) => {
  return collectionApi.getFilteredByGlob("source/2 informations/*.md");
});

  eleventyConfig.addCollection("worksByGroup", (collectionApi) => {
    const all = collectionApi.getFilteredByGlob("source/1 collections/**/*.md");

    const grouped = {};
    for (const item of all) {
      const key = getGroupFromInputPath(item.inputPath);
      if (!key) continue;

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    }

    for (const key of Object.keys(grouped)) {
      grouped[key].sort(
        (a, b) =>
          getFilePrefixNumberFromInputPath(a.inputPath) -
          getFilePrefixNumberFromInputPath(b.inputPath)
      );
    }

    return grouped;
  });

  eleventyConfig.addFilter("groupKeyFromInputPath", (inputPath = "") => {
    return getGroupFromInputPath(inputPath);
  });

  eleventyConfig.addFilter("groupLabel", (groupKey = "") => {
    const raw = String(groupKey).replace(/^\d+\s*/, "");
    return titleCase(raw);
  });

  eleventyConfig.addFilter("groupAnchor", (groupKey = "") => {
    return `group-${slugify(groupKey)}`;
  });

  eleventyConfig.addCollection("workGroups", (collectionApi) => {
    const all = collectionApi.getFilteredByGlob("source/1 collections/**/*.md");

    const grouped = {};
    for (const item of all) {
      const key = getGroupFromInputPath(item.inputPath);
      if (!key) continue;

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    }

    for (const key of Object.keys(grouped)) {
      grouped[key].sort(
        (a, b) =>
          getFilePrefixNumberFromInputPath(a.inputPath) -
          getFilePrefixNumberFromInputPath(b.inputPath)
      );
    }

    return Object.keys(grouped)
      .sort((a, b) => groupOrderFromKey(a) - groupOrderFromKey(b))
      .map((key) => ({
        key,
        label: titleCase(String(key).replace(/^\d+\s*/, "")),
        anchor: `group-${slugify(key)}`,
        items: grouped[key],
      }));
  });

  eleventyConfig.addFilter("prevByUrl", (items, currentUrl) => {
    if (!Array.isArray(items) || !items.length) return null;

    const i = items.findIndex((it) => it.url === currentUrl);
    if (i === -1) return null;

    const prevIndex = (i - 1 + items.length) % items.length;
    return items[prevIndex];
  });

  eleventyConfig.addFilter("nextByUrl", (items, currentUrl) => {
    if (!Array.isArray(items) || !items.length) return null;

    const i = items.findIndex((it) => it.url === currentUrl);
    if (i === -1) return null;

    const nextIndex = (i + 1) % items.length;
    return items[nextIndex];
  });

  return {
    markdownTemplateEngine: "liquid",
  };
  
}
