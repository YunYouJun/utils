import { createCommand } from "commander";
const pkg = require("../package.json");

const program = createCommand();
program.version(pkg.version);

export * as fs from "./fs";
export * as http from "./fs";
export * as utils from "./fs";
