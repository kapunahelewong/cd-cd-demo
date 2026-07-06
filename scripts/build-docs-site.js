// Builds a minimal static HTML page from the OpenAPI spec title and
// description. This stands in for a real static site generator, keeping
// the demo dependency-free so the workflow runs quickly and predictably.

import { readFileSync, mkdirSync, writeFileSync } from "node:fs";

const specPath = new URL("../docs/openapi.yaml", import.meta.url);
const outDir = new URL("../docs/dist/", import.meta.url);

const spec = readFileSync(specPath, "utf-8");

const titleMatch = spec.match(/title:\s*(.+)/);
const descriptionMatch = spec.match(/description:\s*(.+)/);

const title = titleMatch ? titleMatch[1].trim() : "API Documentation";
const description = descriptionMatch ? descriptionMatch[1].trim() : "";

mkdirSync(outDir, { recursive: true });

writeFileSync(
  new URL("index.html", outDir),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${title}</title>
  </head>
  <body>
    <h1>${title}</h1>
    <p>${description}</p>
    <p>Built by the CI/CD demo pipeline.</p>
  </body>
</html>
`,
);

console.log("Built docs site to docs/dist/index.html");
