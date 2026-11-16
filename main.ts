// Driver for the markdown-render-speed-02 entry.
// Reads every case from /input/cases.json (a JSON array of {id, markdown}),
// renders each one alone with parse() from parse.js, and writes
// /output/html.json: a JSON array of the HTML strings, one per case, in
// the cases' order. Runs under node 22 as `node /bot/main.ts`.
// Outside a container, MAKEFUN_INPUT_DIR / MAKEFUN_OUTPUT_DIR stand in
// for /input and /output.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(
  readFileSync(join(inputDir, 'cases.json'), 'utf8'),
) as { id: string; markdown: string }[];

const out: string[] = [];
for (const c of cases) out.push(parse(c.markdown));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'html.json'), JSON.stringify(out));
