const initialState = {
    isTile: false,
    isDarkMode: false
}
export function prefsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_PREFS':
            const { isDarkMode, isTile } = action.prefs
            return { ...state, isDarkMode, isTile }
        default:
            return state
    }
}