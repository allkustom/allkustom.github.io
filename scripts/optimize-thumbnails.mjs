import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";

const sourceRoot = join(process.cwd(), "source");
const collectionsRoot = join(sourceRoot, "1 collections");
const videoExtensions = new Set([".mp4", ".mov"]);
const imageExtensions = new Set([".jpg", ".jpeg", ".png"]);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function derivedPath(input, suffix) {
  return input.slice(0, -extname(input).length) + suffix;
}

function isFresh(output, input) {
  return existsSync(output) && statSync(output).mtimeMs >= statSync(input).mtimeMs;
}

function runFfmpeg(args, label) {
  const result = spawnSync("ffmpeg", ["-hide_banner", "-loglevel", "error", "-y", ...args], {
    stdio: "inherit",
  });
  if (result.status !== 0) throw new Error(`Failed to optimize ${label}`);
}

const photoUrls = new Set();
for (const markdownPath of walk(collectionsRoot).filter((file) => file.endsWith(".md"))) {
  const match = readFileSync(markdownPath, "utf8").match(/^photo:\s*(.+?)\s*$/m);
  if (match) photoUrls.add(match[1]);
}

let created = 0;
for (const url of photoUrls) {
  const input = join(sourceRoot, url.replace(/^\//, ""));
  if (!existsSync(input)) {
    console.warn(`Skipping missing thumbnail source: ${url}`);
    continue;
  }

  const extension = extname(input).toLowerCase();
  if (imageExtensions.has(extension)) {
    const output = derivedPath(input, ".thumb.jpg");
    if (!isFresh(output, input)) {
      runFfmpeg([
        "-i", input,
        "-vf", "scale=1200:-2:force_original_aspect_ratio=decrease",
        "-c:v", "mjpeg", "-q:v", "5",
        "-an", output,
      ], url);
      created += 1;
    }
    continue;
  }

  if (videoExtensions.has(extension)) {
    const videoOutput = derivedPath(input, ".thumb.mp4");
    const posterOutput = derivedPath(input, ".poster.jpg");

    if (!isFresh(videoOutput, input)) {
      runFfmpeg([
        "-i", input,
        "-vf", "scale=960:-2:force_original_aspect_ratio=decrease,fps=18",
        "-c:v", "libx264", "-preset", "slow", "-crf", "30",
        "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-an", videoOutput,
      ], url);
      created += 1;
    }

    if (!isFresh(posterOutput, input)) {
      runFfmpeg([
        "-ss", "0.1", "-i", input, "-frames:v", "1",
        "-vf", "scale=1200:-2:force_original_aspect_ratio=decrease",
        "-c:v", "mjpeg", "-q:v", "5", posterOutput,
      ], url);
      created += 1;
    }
  }
}

console.log(created ? `Created ${created} optimized media files.` : "Optimized media is up to date.");
