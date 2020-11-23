import { createCommand } from "commander";
const pkg = require("../package.json");

const program = createCommand();
program.version(pkg.version);
