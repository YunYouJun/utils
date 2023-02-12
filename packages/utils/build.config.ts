import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/browser',
    'src/fs',
    'src/markdown',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
