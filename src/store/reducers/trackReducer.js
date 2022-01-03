const initialState = {
    tracks: [],
    currTrack: null,
    searches: ['adele'],
    lastSearch: 'adele'
}
export function trackReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_TRACKS':
            return { ...state, tracks: action.tracks }
        case 'SET_TRACK':
            return { ...state, currTrack: action.choosedTrack }
        case 'SET_SEARCHES':
            return { ...state, searches: action.searches }
        case 'SET_LAST_SEARCH':
            return { ...state, lastSearch: action.search }
        default:
            return state
    }
}