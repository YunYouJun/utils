import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['node_modules', '**/node_modules/**', 'dist', '**/dist/**', 'coverage', '**/coverage/**', 'docs/', '**/docs/**/'],
})
