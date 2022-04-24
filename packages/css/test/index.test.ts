import fs from 'fs'
import path from 'path'
import { describe, expect, it } from 'vitest'
import { replaceCssVar } from '..'

const scssText = fs.readFileSync(path.resolve(__dirname, './index.scss'), 'utf-8')
const targetText = fs.readFileSync(path.resolve(__dirname, './result.scss'), 'utf-8')
// fs.writeFileSync(path.resolve(__dirname, './result.scss'), result, 'utf-8')

describe('css var', () => {
  it('replace css var', () => {
    // const result = getCssVar(scssText)
    const result = replaceCssVar(scssText)
    expect(result).equal(targetText)
  })
})
