import initRollupConfig from './core/rollup.config.js'
import { ensureNpmManager } from './utils/npm.js'

const create = async (options) => {
  await ensureNpmManager()

  if (options.rollup) {
    await initRollupConfig()
  }
}

export default create
