import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { prefsReducer } from './reducers/prefReducer';
import { trackReducer } from './reducers/trackReducer';

const rootReducer = combineReducers({
    trackModule: trackReducer,
    prefsModule: prefsReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


// For Debug
window.myStore = store;
store.subscribe(() => {
    console.log('Global State is:', store.getState().trackModule)
})
