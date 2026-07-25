// Generate public/agents.md from the shared Agent Guide source of truth.
import { writeFileSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcPath = resolve(__dirname, "../src/content/agent-guide.ts");
const outPath = resolve(__dirname, "../public/agents.md");

const src = readFileSync(srcPath, "utf8");

const updatedMatch = src.match(/AGENT_GUIDE_UPDATED\s*=\s*"([^"]+)"/);
const mdMatch = src.match(/AGENT_GUIDE_MARKDOWN\s*=\s*`([\s\S]*?)`;/);

if (!mdMatch) {
  console.error("Could not extract AGENT_GUIDE_MARKDOWN from source.");
  process.exit(1);
}

const updated = updatedMatch ? updatedMatch[1] : "";
const md = mdMatch[1].replace(/\$\{AGENT_GUIDE_UPDATED\}/g, updated);

writeFileSync(outPath, md, "utf8");
console.log(`Wrote ${outPath} (${md.length} chars)`);
