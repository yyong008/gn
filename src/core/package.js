import { getTplPkgJson, setPkgJson } from '../utils/package.js'
import { execRun } from '../utils/index.js'
// import { getConfig } from '../utils/config.js'
import logger from '../utils/logger.js'
import { isUndefined, getRunCmdStr } from '../utils/utils.js'
// 1. 是否支持 ts
// 2. 是否使用 es module
export default async function initPackageJson(options) {
  const { typescript, name, esm } = options
  const pkgJson = await getTplPkgJson()

  pkgJson['name'] = name

  if (esm && !options.typescript) {
    pkgJson.type = 'module'
  }

  if (typescript) {
    if (isUndefined(pkgJson.devDependencies)) {
      pkgJson.devDependencies = {
        typescript: '^4.8.2',
        'ts-node': '10.9.1',
        '@types/node': '18.8.1'
      }
    }
  }
  await setPkgJson(JSON.parse(JSON.stringify(pkgJson)))
  await execRun(getRunCmdStr())
  logger.info('✅ package.json 生成完成')
}
