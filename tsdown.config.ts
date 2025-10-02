import {nodeCli} from "tsdown-config-silverwind";
import {defineConfig} from "tsdown";

export default defineConfig(nodeCli({
  entry: ["./node_modules/newman/bin/newman.js"],
  url: import.meta.url,
  minify: true,
  sourcemap: false,
  external: ["terser"],
}));
