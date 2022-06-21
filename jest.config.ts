import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  rootDir: __dirname,
  testMatch: ["<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)"],
  moduleNameMapper: {
    "^@ts-monorepo-starter/(.*?)$": "<rootDir>/packages/$1/src",
  },
};

export default config;
