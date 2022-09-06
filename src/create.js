import initRollupConfig from './core/rollup.config.js'

const create = async (options) => {
  if (options.rollup) {
    await initRollupConfig()
  }
}

export default create
