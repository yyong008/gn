import { getConfig } from './config.js'

export function isUndefined(v) {
    return typeof v === 'undefined'
}

export  function getRunCmdStr() {
    const { npmManager } = getConfig()
    return npmManager === 'yarn' ? 'yarn' : `${npmManager} install`
} 