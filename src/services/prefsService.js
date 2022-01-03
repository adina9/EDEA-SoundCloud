import { asyncStorageService } from "./async-storage.service"

const PREFS_KEY = 'prefsDB'

export const prefsService = {
    loadPrefs,
    setDisplay,
    setMode
}

async function loadPrefs() {
    try {
        var prefs = await asyncStorageService.query(PREFS_KEY)
        if (Array.isArray(prefs)) {
            prefs = { isDarkMode: false, isTile: false }
        }
        return _savePrefs(prefs)
    } catch (err) {
        console.log('err in prefsAction in loadPrefs:', err);
    }
}

async function setDisplay(val) {
    const prefs = await asyncStorageService.query(PREFS_KEY)
    prefs.isTile = val
    return _savePrefs(prefs)
}

async function setMode(val) {
    const prefs = await asyncStorageService.query(PREFS_KEY)
    prefs.isDarkMode = val
    return _savePrefs(prefs)
}

async function _savePrefs(prefs) {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs))
    return Promise.resolve(prefs)
}
