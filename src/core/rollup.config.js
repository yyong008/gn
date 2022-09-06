import logger from '../utils/logger.js'
import { genConfigFileByName } from '../utils/configFile.js'

export default async function initRollupConfig() {
  await genConfigFileByName('rollup.config.js')

  logger.info('✅ rollup 配置文件初始化成功')
}
