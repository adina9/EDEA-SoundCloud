import { trackService } from "../../services/trackService";


export function queryTracks(q) {
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
export function loadSearches() {
    return async dispatch => {
        try {
            const searches = await trackService.querySearches()
            dispatch({ type: 'SET_SEARCHES', searches })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}

export function setLastSearch(search, isIncluded) {
    return async dispatch => {
        try {
            if (isIncluded) {
                const searches = await trackService.saveSearch(search)
                dispatch({ type: 'ADD_SEARCH', searches })
            }
            dispatch({ type: 'SET_LAST_SEARCH', search })
        } catch (err) {
            console.log('err in trackAction in setLastSearch:', err);
        }
    }
}
