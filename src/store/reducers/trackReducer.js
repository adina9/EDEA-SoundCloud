const initialState = {
    tracks: [],
    currTrack: null
}
export function trackReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_TRACKS':
            return { ...state, tracks: action.tracks }
        case 'SET_TRACK':
            return { ...state, currTrack: action.choosedTrack }
        case 'ADD_BOOK':
            return {
                ...state,
                tracks: [action.track, ...state.choosedTrack]
            }
        case 'REMOVE_BOOK':
            return { ...state, tracks: state.tracks.filter(track => track._id !== action.trackId) }
        //  ||  return { ...state, tracks: state.tracks.filter(book => book.title !== action.bookTitle) }  //depends on data
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