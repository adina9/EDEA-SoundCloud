import { trackService } from "../../services/trackService";

export function loadTracks(q) {
    return async dispatch => {
        try {
            const tracks = await trackService.query(q)
            dispatch({ type: 'SET_TRACKS', tracks })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}
export function chooseTrack(track) {
    return async dispatch => {
        try {
            const choosedTrack = await trackService.choose(track)
            dispatch({ type: 'SET_TRACK', choosedTrack })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}