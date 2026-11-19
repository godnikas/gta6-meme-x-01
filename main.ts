// gta6-meme-x-01 — entrypoint
//
// The whole entry is a single public post on X: a GTA 6 meme
// picture plus its caption text. This program has exactly one
// job in the grader: move the repository's POST.json, which
// names that post, into the output folder untouched.
//
// Local run (mirrors how the grader invokes it):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no clock, no randomness — same input, same output.
// Revision note: the existence check below was added after the first
// local run, so a missing POST.json fails with a readable message
// instead of a raw copy error from deep inside the copy call.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function resolveDirs() {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return { botDir, outputDir };
}

function handOverPostFile(botDir: string, outputDir: string) {
  const source = join(botDir, "POST.json");
  const target = join(outputDir, "POST.json");

  if (!existsSync(source)) {
    throw new Error(`missing POST.json in bot dir: ${botDir}`);
  }

  mkdirSync(outputDir, { recursive: true });
  // Byte-for-byte copy: the gate parses this file itself, so
  // reformatting or "helpfully" editing the URL would be a bug.
  copyFileSync(source, target);
}

const { botDir, outputDir } = resolveDirs();

try {
  handOverPostFile(botDir, outputDir);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`gta6-meme-x-01: failed to publish POST.json — ${message}`);
  process.exit(1);
}
