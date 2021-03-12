# logger

[![npm (scoped)](https://img.shields.io/npm/v/@yunyoujun/logger)](https://www.npmjs.com/package/@yunyoujun/logger)

简单的彩色日志输出

- `success`: 绿色
- `warning`: 橙色
- `error`: 红色
- `info`: 蓝色
- `debug`: `cyan` 蓝绿色

## Usage

```sh
yarn add @yunyoujun/logger
```

```ts
import { Logger } from "@yunyoujun/logger";
const logger = new Logger();
logger.success("Success!");
```
