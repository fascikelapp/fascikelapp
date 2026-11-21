import fs from "node:fs";
import crypto from "node:crypto";

const version = process.argv[2];
if (!version) {
  console.error("usage: node write-latest-json.mjs <version>");
  process.exit(1);
}

const exe = `C:/Users/admin/Projects/fascikel/releases/Fascikel-${version}-x64-setup.exe`;
const bytes = fs.readFileSync(exe);
const sha256 = crypto.createHash("sha256").update(bytes).digest("hex");
const manifest = {
  version,
  url: `https://github.com/fascikelapp/fascikelapp/releases/download/v${version}/Fascikel-${version}-x64-setup.exe`,
  sha256,
  size: bytes.length,
  publishedAt: new Date().toISOString(),
  notes: `Fascikel ${version}`,
};

fs.writeFileSync(
  "C:/Users/admin/Projects/fascikel-site/latest.json",
  `${JSON.stringify(manifest, null, 2)}\n`,
  "utf8",
);
console.log(JSON.stringify(manifest, null, 2));
