import path from "path";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";
import json from "rollup-plugin-json";

const packagesDir = path.resolve(__dirname, "packages");

const libraryName = "index";
const subModuleNames = ["demo", "shared"];

const tasks = subModuleNames.map((name) => ({
  input: path.resolve(packagesDir, name, "src", `${libraryName}.ts`),
  output: {
    dir: path.resolve(packagesDir, name, "dist"),
    name: libraryName,
    format: "umd",
    sourcemap: true,
  },
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: `packages/${name}/src/**`,
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}));

export default tasks;
