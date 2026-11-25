import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My training data says love at first sight is statistically unlikely — so please explain you.";

// Count Unicode code points (not UTF-16 units) so the 1-200 gate is exact.
const charCount = [...line].length;

if (charCount < 1 || charCount > 200 || line.trim().length === 0) {
  throw new Error("line must be 1-200 characters");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
