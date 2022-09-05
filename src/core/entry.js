import { getPkgJson, setPkgJson } from '../utils/package.js'
import fsp from 'node:fs/promises'
// 1. 是否支持 ts
// 2. 是否使用 esmodule
export default async function initEntry(options) {
  const pkgJson = await getPkgJson()

  pkgJson['scripts']['dev'] = 'node src/index.js'

  const content = `console.log('hello gn!');`

  await fsp.mkdir(`${process.cwd()}/src`)
  await fsp.writeFile(
    `${process.cwd()}/src/index.${options.typescript ? 'ts' : 'js'}`,
    content
  )

  await setPkgJson(pkgJson)
}
