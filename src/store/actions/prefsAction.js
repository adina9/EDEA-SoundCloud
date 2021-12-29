import { prefsService } from "../../services/prefsService";

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