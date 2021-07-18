import { logger } from "./logger";

/**
 * 在标签间插入内容
 * @param namespace 命名空间
 * @param content 原内容
 * @param injectedContent 被插入的内容
 * @returns
 */
export function injectContentBetweenTags(
  namespace: string,
  content: string,
  injectedContent: string
) {
  const startTag = `<!-- ${namespace}:start -->`;
  const endTag = `<!-- ${namespace}:end -->`;

  const startIndex = content.indexOf(startTag);
  const endIndex = content.indexOf(endTag, startIndex);

  if (startIndex === -1 || endIndex === -1) {
    logger.warning(`Can not find ${startTag} and ${endTag}.`);
    return "";
  }
  return [
    content.slice(0, startIndex + startTag.length),
    "\n<!-- prettier-ignore-start -->",
    "\n<!-- markdownlint-disable -->\n",
    injectedContent,
    "\n<!-- markdownlint-restore -->",
    "\n<!-- prettier-ignore-end -->\n",
    content.slice(endIndex),
  ].join("");
}
