import { getPkgJson, setPkgJson } from '../utils/package.js'
import fsp from 'node:fs/promises'
import logger from '../utils/logger.js'

// 1. 是否支持 ts
// 2. 是否使用 esm
export default async function initEntry(options) {
  const pkgJson = await getPkgJson()

  pkgJson['scripts']['dev'] = options.typescript
    ? 'ts-node src/index.ts'
    : 'node src/index.js'

  const content = `console.log('hello gn!')\n`

  await fsp.mkdir(`${process.cwd()}/src`)
  await fsp.writeFile(
    `${process.cwd()}/src/index.${options.typescript ? 'ts' : 'js'}`,
    content
  )

  await setPkgJson(pkgJson)
  logger.info('✅ scripts 入口文件配置完成')
}
