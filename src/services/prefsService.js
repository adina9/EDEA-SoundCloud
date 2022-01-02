import { asyncStorageService } from "./async-storage.service"

const PREFS_KEY = 'prefsDB'

export const prefsService = {
    loadPrefs,
    setDisplay,
    setMode
}

async function loadPrefs() {
    try {
        const prefs = await asyncStorageService.query(PREFS_KEY)
        if (Object.keys(prefs).length) return Promise.resolve(prefs)
        else {
            prefs = { isDarkMode: false, isTile: false }
            _savePrefs(prefs)
        }
    } catch (err) {
        console.log('err in prefsAction in loadPrefs:', err);
    }
}

async function setDisplay(val) {
    const prefs = await asyncStorageService.query(PREFS_KEY)
    prefs.isTile = val
    _savePrefs(prefs)
}

async function setMode(val) {
    const prefs = await asyncStorageService.query(PREFS_KEY)
    prefs.isDarkMode = val
    _savePrefs(prefs)
}

async function _savePrefs(prefs) {
    return Promise.resolve(await asyncStorageService.post(PREFS_KEY, prefs))
}
