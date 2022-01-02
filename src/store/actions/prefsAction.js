import { prefsService } from "../../services/prefsService";

export function loadPrefs() {
    return async dispatch => {
        try {
            const prefs = await prefsService.loadPrefs()
            dispatch({ type: 'SET_PREFS', prefs })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}
export function setDisplay(val) {
    return async dispatch => {
        try {
            const isTile = await prefsService.setDisplay(val)
            dispatch({ type: 'SET_DISPLAY', isTile })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}
export function setMode(val) {
    return async dispatch => {
        try {
            const isDarkMode = await prefsService.setMode(val)
            dispatch({ type: 'SET_MODE', isDarkMode })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}