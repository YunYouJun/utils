import path from 'node:path'
import fs from 'fs-extra'

import consola from 'consola'
import { $ } from 'zx'
import { getPkgRoot } from './utils'

/**
 * get monorepo packages
 */
const packages = fs
  .readdirSync(path.resolve(__dirname, '../packages'))
  .filter(
    p => !p.endsWith('.ts') && !p.endsWith('.md') && !p.startsWith('.'),
  )

async function main() {
  // upgrade by bumpp
  const { version } = await fs.readJSON('package.json')

  // update all package versions and inter-dependencies

  consola.debug('Updating cross dependencies...')
  updateVersions(version)

  // build packages
  consola.debug('Building all packages...')
  await $`npm run build`

  // publish package
  console.log()
  consola.debug('Publishing packages...')
  // for (const pkg of packages)
  //   await publishPackage(pkg, targetVersion)
}

function updateVersions(version: string) {
  // 1. update root package.json
  updatePackage(path.resolve(__dirname, '..'), version)
  // 2. update all packages
  packages.forEach(p => updatePackage(getPkgRoot(p), version))
}

function updatePackage(pkgRoot: string, version: string) {
  const pkgPath = path.resolve(pkgRoot, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
  pkg.version = version
  updateDeps(pkg, 'dependencies', version)
  updateDeps(pkg, 'peerDependencies', version)
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
}

function updateDeps(pkg: any, depType: string, version: string) {
  const deps = pkg[depType]
  if (!deps)
    return
  const pkgName = 'yunyoujun'
  Object.keys(deps).forEach((dep) => {
    if (
      dep === pkgName
      || (dep.startsWith(`@${pkgName}`)
      && packages.includes(dep.replace(`@${pkgName}`, '')))
    ) {
      consola.warn(`${pkg.name} -> ${depType} -> ${dep}@${version}`)
      deps[dep] = version
    }
  })
}

main().catch((err) => {
  console.error(err)
})
