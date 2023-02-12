import path from 'path'
import fs from 'fs'
import consola from 'consola'
import { $ } from 'zx'

export const getPkgRoot = (pkg: string) =>
  path.resolve(__dirname, `../packages/${pkg}`)

/**
 * publish packages
 * if you want to publish when local
 * @param pkgName
 * @param version
 * @returns
 */
export async function publishPackage(pkgName: string, version: string) {
  const pkgRoot = getPkgRoot(pkgName)
  const pkgPath = path.resolve(pkgRoot, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  if (pkg.private)
    return

  consola.debug(`Publishing [${pkgName}]...`)
  try {
    await $`npx pnpm -r publish --access public --no-git-checks`
    consola.success(`Successfully published ${pkgName}@${version}`)
  }
  catch (e) {
    if (e.stderr.match(/previously published/))
      consola.error(`Skipping already published: ${pkgName}`)

    else
      throw e
  }
}
