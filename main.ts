// main.ts — "The Internet in One Word" (make.fun, program/v1).
// The entry is a single word describing the whole internet. This program
// writes that word, and nothing else, to entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "enshittification";

// Gate: the entry must be exactly one word — a single run of lowercase
// letters, 1 to 30 characters, no spaces, punctuation or extra text —
// matching the sealed scorer's validity rule for /output/entry.txt.
if (!/^[a-z]{1,30}$/.test(WORD)) {
  console.error(`invalid entry word: ${JSON.stringify(WORD)}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(WORD);
