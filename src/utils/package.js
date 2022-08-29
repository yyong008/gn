import fsp from 'node:fs/promises'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const pkgPath = (root) => {
  return `${root ? root : process.cwd()}/package.json`
}

/**
 * 获取 package.json JSON
 */
export async function getPkgJson() {
  const pkgStr = fs.readFileSync(pkgPath(), 'utf-8')
  const pkgJson = JSON.parse(pkgStr)
  return pkgJson
}

export async function getTplPkgJson() {
  const pkgStr = fs.readFileSync(
    path.normalize(`${__dirname}/../tpls/_package.json`),
    'utf-8'
  )
  const pkgJson = JSON.parse(pkgStr)
  return pkgJson
}

/**
 *  设置 package.json
 * @param {*} pkg
 */
export async function setPkgJson(pkgJson) {
  await fsp.writeFile(pkgPath(), JSON.stringify(pkgJson, null, 2))
}
