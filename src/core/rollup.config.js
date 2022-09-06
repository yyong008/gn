import logger from '../utils/logger.js'
import { genConfigFileByName } from '../utils/configFile.js'
import { getPkgJson, setPkgJson } from '../utils/package.js'
import { execRun } from '../utils/index.js'
import { getConfig } from '../utils/config.js'

export default async function initRollupConfig() {
  const pkgJson = await getPkgJson()

  pkgJson['scripts']['compile'] = 'rollup -c'
  pkgJson['devDependencies']['rollup'] = '^2.79.0'

  await genConfigFileByName('rollup.config.js')
  await setPkgJson(pkgJson)

  const { npmManager } = getConfig()
  await execRun(npmManager === 'yarn' ? 'yarn' : `${npmManager} install`)
  logger.info('\n✅ rollup 配置文件初始化成功\n')
}
