import { getPkgJson, setPkgJson } from '../utils/package.js'
import fsp from 'node:fs/promises'
import logger from '../utils/logger.js'
import { genConfigFileByName } from '../utils/configFile.js'
import { execRun } from '../utils/index.js'
import { getRunCmdStr, isUndefined } from '../utils/utils.js'

export default async function initTest(options) {
  const { test } = options

  if (!test) return

  const pkgJson = await getPkgJson()
  pkgJson['scripts']['test'] = 'jest'

  if (isUndefined(pkgJson.devDependencies)) {
    pkgJson.devDependencies = {
      jest: '^29.1.2'
    }
  }

  // test 文件和基本及用例
  const content = `
test("1 + 1 to be 2", () => {
  expect(1+1).toBe(2)
})
`
  await genConfigFileByName('jest.config.js')

  await fsp.mkdir(`${process.cwd()}/src/test/`)
  await fsp.writeFile(
    `${process.cwd()}/src/test/index.${
      options.typescript ? '.spec.ts' : '.spec.js'
    }`,
    content
  )

  await setPkgJson(pkgJson)
  await execRun(getRunCmdStr())
  logger.info('✅ Jest 测试文件配置完毕')
}
