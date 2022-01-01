const initialState = {
    tracks: [],
    currTrack: null,
    searches: []
}
export function trackReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_TRACKS':
            return { ...state, tracks: action.tracks }
        case 'SET_TRACK':
            return { ...state, currTrack: action.choosedTrack }
        case 'ADD_SEARCHES':
            return {
                ...state,
                searches: [action.search, ...state.searches]
            }
        case 'SET_SEARCHES':
            return { ...state, searches: action.searches }

        case 'SAVE_BOOK':
            const editedtracks = state.tracks.map(track => {
                if (track._id === action.track._id) return action.track
                return track
            })
            return { ...state, tracks: editedtracks }
        default:
            return state
    }
}