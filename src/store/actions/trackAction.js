import { trackService } from "../../services/trackService";





export function queryTracks(q = 'adele') {
    return async dispatch => {
        try {
            const tracks = await trackService.query(q)
            console.log('tracks:', tracks)
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
export function saveSearch(search) {
    return async dispatch => {
        try {
            const savedSearch = await trackService.saveSearch(search)
            dispatch({ type: 'ADD_SEARCHES', search: savedSearch })
        } catch (err) {
            console.log('err in trackAction in loadTracks:', err);
        }
    }
}
