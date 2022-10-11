import fsp from 'node:fs/promises'
import logger from '../utils/logger.js'
import { getConfig } from '../utils/config.js'

import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))


export default async function initVSCodeDebug(options) {
  const { debugJs } = options

  if (!debugJs) return
  const { npmManager } = getConfig()

  // test 文件和基本及用例
  const launchStr = await fsp.readFile(__dirname + '/../tpls/_launch.json')

  let content = JSON.parse(launchStr)
  content['configurations']['runtimeExecutable'] = npmManager
  content['configurations']['runtimeArgs'] =
    npmManager === 'yarn' ? ['dev'] : ['run', 'dev']

  await fsp.mkdir(`${process.cwd()}/.vscode`)
  await fsp.writeFile(`${process.cwd()}/.vscode/launch.json`, JSON.stringify(content, null, 2))

  logger.info('✅ VSCode 调试初始化完成')
}
