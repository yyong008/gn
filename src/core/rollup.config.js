import logger from '../utils/logger.js'
import { genConfigFileByName } from '../utils/configFile.js'
import { getPkgJson, setPkgJson } from '../utils/package.js'
import { execRun } from '../utils/index.js'
import { getConfig } from '../utils/config.js'

export default async function initRollupConfig() {
  const pkgJson = await getPkgJson()

  pkgJson['scripts']['compile'] = 'rollup -c'

  await genConfigFileByName('rollup.config.js')
  await setPkgJson(pkgJson)

  const { npmManager } = getConfig()
  await execRun(npmManager === 'yarn' ? 'yarn' : `${npmManager} install`)
  logger.info('✅ rollup 配置文件初始化成功')
}
