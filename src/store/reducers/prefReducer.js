const initialState = {
    isTile: false
}
export function prefsReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DISPLAY':
            return { ...state, isTile: action.isTile }
        default:
            return state
    }
}