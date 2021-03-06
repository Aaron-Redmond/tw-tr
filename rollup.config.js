import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss'

import packageJson from "./package.json";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
      ]
  }),
    peerDepsExternal(), resolve(), commonjs(), typescript()],
};