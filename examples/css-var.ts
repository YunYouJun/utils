import fs from 'fs'
import path from 'path'

import fg from 'fast-glob'
import { getCssVar, replaceCssVar } from '../packages/css'

async function main() {
  const themeChalkFolder = '/Users/yunyou/github/org/ep/element-plus/packages/theme-chalk'
  const entries = await fg([`${themeChalkFolder}/**/*.scss`, '!**/mixins/*.scss'])

  for (let i = 0; i < entries.length; i++) {
    const scssFile = entries[i]

    const source = fs.readFileSync(scssFile, 'utf-8')
    const result = getCssVar(source, 'el')

    if (result) {
      const tempFolder = `${themeChalkFolder}/temp/`
      if (!fs.existsSync(tempFolder))
        fs.mkdirSync(tempFolder)
      fs.writeFileSync(tempFolder + path.basename(scssFile), replaceCssVar(source), 'utf-8')
    }
  }
}

main()
