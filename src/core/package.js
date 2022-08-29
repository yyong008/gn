import { getTplPkgJson, setPkgJson } from '../utils/package.js'
import { execRun } from '../utils/index.js'
import { getConfig } from '../utils/config.js'
// 1. 是否支持 ts
// 2. 是否使用 esmodule
export default async function initPackageJson(options) {
  const { typescript, name, esm } = options
  const pkgJson = await getTplPkgJson()

  pkgJson['name'] = name

  if (esm) {
    pkgJson['type'] = 'module'
  }

  if (typescript) {
    if (!pkgJson['devDependencies']) {
      pkgJson['devDependencies'] = {
        typescript: '^4.8.2'
      }
    }
  }

  await setPkgJson(pkgJson)
  const { npmManager } = getConfig()
  await execRun(npmManager === 'yarn' ? 'yarn' : `${npmManager} install`)
}
