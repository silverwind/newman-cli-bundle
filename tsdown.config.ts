import {nodeCli} from "tsdown-config-silverwind";
import {defineConfig} from "tsdown";

export default defineConfig(nodeCli({
  entry: ["./node_modules/newman/bin/newman.js"],
  url: import.meta.url,
  minify: true,
  sourcemap: false,
  deps: {neverBundle: ["terser"]},
  plugins: [{
    name: "strip-node-version-check", // https://github.com/postmanlabs/newman/issues/3379, matched by content so an upstream fix or rename no-ops
    transform: (code: string) => code.includes("required node version") && code.includes("semver.satisfies") ? "" : null,
  }],
}));
