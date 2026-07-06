// Validates the OpenAPI spec exists and is at least parseable YAML shaped
// content. In a real project this step would call a tool like Redocly,
// Scalar, or a custom generator to turn the spec into reference pages.
// Kept intentionally simple here so the workflow runs with zero external
// dependencies beyond Node itself.

import { readFileSync } from "node:fs";

const specPath = new URL("../docs/openapi.yaml", import.meta.url);

try {
  const contents = readFileSync(specPath, "utf-8");
  if (!contents.includes("openapi:")) {
    throw new Error("openapi.yaml does not look like a valid OpenAPI spec");
  }
  console.log("OpenAPI spec found and looks valid: docs/openapi.yaml");
} catch (err) {
  console.error("Failed to validate OpenAPI spec:", err.message);
  process.exit(1);
}
