import { expectTypeOf } from 'vitest'
import type { Camelize } from '@yunyoujun/types'

test('snake-case-camelize', () => {
  expectTypeOf<Camelize<{
    snake_case: string
    nested: {
      snake_case: string
    }
    array: Array<{
      snake_case: string
    }>
  }>>().toEqualTypeOf<{
    snakeCase: string
    nested: {
      snakeCase: string
    }
    array: Array<{
      snakeCase: string
    }>
  }>()
})
