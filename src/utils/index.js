import { exec } from 'child_process'
import { promisify } from 'node:util'

/**
 * 异步运行
 * @param {*} commander
 */
export async function execRun(command) {
  await promisify(exec)(command)
}
