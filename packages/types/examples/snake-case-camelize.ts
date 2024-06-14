import type { Camelize } from '@yunyoujun/types'

export interface SnakeCase {
  snake_case: string
  nested: {
    snake_case: string
  }
  array: Array<{
    snake_case: string
  }>
}

export type CamelizedSnakeCase = Camelize<SnakeCase>
