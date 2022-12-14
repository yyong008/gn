import { getTplPkgJson, setPkgJson } from '../utils/package.js'
import { execRun } from '../utils/index.js'
import { getConfig } from '../utils/config.js'
import logger from '../utils/logger.js'

// 1. 是否支持 ts
// 2. 是否使用 esmodule
export default async function initPackageJson(options) {
  const { typescript, name, esm } = options
  const pkgJson = await getTplPkgJson()

  pkgJson['name'] = name

  if (esm) {
    pkgJson.type = 'module'
  }

  if (typescript) {
    if (typeof pkgJson.devDependencies === 'undefined') {
      pkgJson.devDependencies = {
        typescript: '^4.8.2'
      }
    }
  }
  await setPkgJson(JSON.parse(JSON.stringify(pkgJson)))
  const { npmManager } = getConfig()
  await execRun(npmManager === 'yarn' ? 'yarn' : `${npmManager} install`)
  logger.info('✅ package.json 生成完成')
}
