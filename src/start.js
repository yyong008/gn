import logger from './utils/logger.js'
import { ensureNpmManager } from './utils/npm.js'

import { checkAndInitGitRepo } from './utils/git.js'
import { genConfigIgnoreFileByName } from './utils/configFile.js'

import initPackageJson from './core/package.js'
import initEntry from './core/entry.js'
import initTest from './core/test.js'
import initVSCodeDebug from './core/debug-js.js'

export default async function start(options) {
  await ensureNpmManager()

  logger.info('\n 🤞 开始创建 JavaScript 项目 🚀🚀🚀 \n')
  console.table({
    'es module': '默认使用 es module',
    typescript: '默认不开启 typescript'
  })

  await checkAndInitGitRepo(options)
  await genConfigIgnoreFileByName('.gitignore')

  await initPackageJson(options)
  await initEntry(options)
  await initTest(options)
  await initVSCodeDebug(options)

  logger.info('\n 🌻🌻🌻 创建项目完成\n')
}
