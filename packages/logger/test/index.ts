import { Logger } from "../src";
const logger = new Logger({ type: false });

const content = "content";
logger.info(content);
