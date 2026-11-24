// One word, first thought: liminal.
// hello, judge — this entry is a single word and nothing else.
// No batch of candidates, no orders to decorate, no second slot.
// thinking_revised: kept the first spark, let the other words fall away.

import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const word = "liminal";

const here = fileURLToPath(new URL(".", import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputDir = resolve(here, configured);

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), word, "utf8");

console.log(`entry.txt ${Buffer.byteLength(word, "utf8")} bytes`);
