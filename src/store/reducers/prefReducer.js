const initialState = {
    isTile: false,
    isDarkMode: false
}
export function prefsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DISPLAY':
            return { ...state, isTile: action.isTile }
        case 'SET_MODE':
            return { ...state, isDarkMode: action.isDarkMode }
        case 'SET_PREFS':
            const { isDarkMode, isTile } = action.prefs
            return { ...state, isDarkMode, isTile }
        default:
            return state
    }
}