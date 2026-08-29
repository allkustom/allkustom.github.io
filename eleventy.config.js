import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";

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
      if (/\bdata-eager=/i.test(tag) || /id="imgModalImg"/i.test(tag)) {
        return tag;
      }

      let image = tag;
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
