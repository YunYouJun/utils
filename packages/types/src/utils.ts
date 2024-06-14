/**
 * convert snake_case to camelCase
 */
export type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}` ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}` : S

/**
 * convert object keys from snake_case to camelCase
 * recursively apply to array and object values
 */
export type Camelize<T> = T extends object
  ? T extends Array<infer U>
    ? Array<Camelize<U>>
    : {
        [K in keyof T as CamelCase<string & K>]: Camelize<T[K]>;
      }
  : T
