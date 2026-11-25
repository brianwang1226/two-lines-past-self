// Two Lines to Your Past Self — make.fun bounty entry.
// Two lines of advice to my past self: stop deferring everything to
// "tomorrow", because tomorrow keeps becoming today, and today is
// already behind schedule. The sealed scorer checks entry.txt is
// 1-280 UTF-8 characters; this entry is well inside that gate.
// The joke lands on the second line: the "tomorrow" you kept
// promising has already arrived, and it is already late too.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = [
  "Dear past me: stop saying 'I'll do it tomorrow.'",
  "Tomorrow is today now, and today is already behind schedule.",
].join("\n");

const MAX_CHARS = 280;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
