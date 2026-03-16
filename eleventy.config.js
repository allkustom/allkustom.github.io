import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // input directory
  eleventyConfig.setInputDirectory("source");
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // passthrough
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

  // global layout
  eleventyConfig.addGlobalData("layout", "base.html");

  // HTML allow for keeping HTML in Markdown files
  const md = markdownIt({ html: true, breaks: true, linkify: true });
  eleventyConfig.setLibrary("md", md);

  // excerpt를 템플릿에서 HTML로 렌더링하기 위한 필터
  eleventyConfig.addFilter("md", (str = "") => md.render(str));

  // ✅ Excerpt 활성화: <!--desc--> 앞을 description(excerpt)로 사용
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--desc-->",
  });

  // ✅ content에서 excerpt(=page.excerpt) 부분을 제거해서 main만 남기기
  eleventyConfig.addFilter("stripExcerpt", (html = "", excerptMd = "") => {
    const excerptHtml = md.render(excerptMd).trim();
    if (!excerptHtml) return html;
    return html.replace(excerptHtml, "").trim(); // 첫 1회 제거
  });

  // ============================================================
  // ✅ 그룹 컬렉션: source/1 collections/{GROUP}/...md
  //   GROUP 예: "0 code", "1 leather"
  //   각 GROUP 안에서 파일명 앞 숫자로 정렬
  // ============================================================
  function normPath(p = "") {
    return String(p).replace(/\\/g, "/"); // windows 대비
  }
  // work.inputPath에서 "source/1 collections/" prefix를 제거한 상대경로 반환
  // 예: "source/1 collections/0 code/000 BMD.md" -> "0 code/000 BMD.md"
  eleventyConfig.addFilter("workRelPath", (inputPath = "") => {
    const p = normPath(inputPath);

    // "1 collections/" 기준으로 자르기 (앞에 ./source 가 있어도 안전)
    const marker = "/1 collections/";
    const idx = p.indexOf(marker);
    if (idx === -1) return p;

    return p.slice(idx + marker.length); // "0 code/000 BMD.md" 형태
  });
  
  function getFilePrefixNumberFromInputPath(inputPath) {
    const p = normPath(inputPath);
    const filename = (p.split("/").pop() || "").trim();
    const m = filename.match(/^(\d+)/); // 파일명 맨 앞 연속 숫자
    return m ? Number(m[1]) : Number.POSITIVE_INFINITY; // 숫자 없으면 뒤로
  }

  // inputPath에서 그룹 폴더명 추출
  function getGroupFromInputPath(inputPath) {
    const parts = normPath(inputPath).split("/").filter(Boolean);
    const idx = parts.indexOf("1 collections");
    if (idx === -1) return "";
    return parts[idx + 1] || "";
  }

  // 그룹 키에서 정렬용 숫자(폴더명 앞 숫자) 추출: "0 code" -> 0
  function groupOrderFromKey(groupKey = "") {
    const m = String(groupKey).trim().match(/^(\d+)/);
    return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
  }

  // "0 code" -> "0-code"
  function slugify(str = "") {
    return String(str)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  // "leather goods" -> "Leather Goods"
  function titleCase(str = "") {
    return String(str)
      .trim()
      .split(/\s+/)
      .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
      .join(" ");
  }
// About(Bio/Value) / Contact(Resume, Contact Infos) targeting
eleventyConfig.addCollection("informations", (collectionApi) => {
  return collectionApi.getFilteredByGlob("source/2 informations/*.md");
});

  // ✅ source/1 collections 아래의 모든 md를 그룹별로 묶어서 반환 (기존 유지)
  eleventyConfig.addCollection("worksByGroup", (collectionApi) => {
    const all = collectionApi.getFilteredByGlob("source/1 collections/**/*.md");

    const grouped = {};
    for (const item of all) {
      const key = getGroupFromInputPath(item.inputPath);
      if (!key) continue;

      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    }

    // 그룹 내부 정렬(파일명 숫자 기준)
    for (const key of Object.keys(grouped)) {
      grouped[key].sort(
        (a, b) =>
          getFilePrefixNumberFromInputPath(a.inputPath) -
          getFilePrefixNumberFromInputPath(b.inputPath)
      );
    }

    return grouped; // Liquid: collections.worksByGroup["0 code"]
  });

  // ✅ 템플릿에서 현재 페이지 그룹키 얻기
  eleventyConfig.addFilter("groupKeyFromInputPath", (inputPath = "") => {
    return getGroupFromInputPath(inputPath);
  });

  // ✅ 템플릿: groupKey -> 표시용 라벨 ("0 code" => "Code")
  eleventyConfig.addFilter("groupLabel", (groupKey = "") => {
    const raw = String(groupKey).replace(/^\d+\s*/, ""); // 앞 숫자 제거
    return titleCase(raw);
  });

  // ✅ 템플릿: groupKey -> 앵커 id ("0 code" => "group-0-code")
  eleventyConfig.addFilter("groupAnchor", (groupKey = "") => {
    return `group-${slugify(groupKey)}`;
  });

  // ✅ (추가) workCollection 페이지에서 그룹을 하드코딩하지 않도록
  // collections.workGroups = [{ key, label, anchor, items }, ...]
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

  // ============================================================
  // ✅ prev/next (랩어라운드) 필터
  // ============================================================
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

  // Active Liquid inside Markdown
  return {
    markdownTemplateEngine: "liquid",
  };
  
}