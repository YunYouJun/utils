export interface LoggerOptions {
  /**
   * 前缀
   */
  prefix: string;
  /**
   * 是否显示类型
   */
  type: boolean;
}

export const defaultOptions = {
  prefix: "",
  type: true,
};
