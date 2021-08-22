import { combineReducers } from 'redux';
import { createStore } from 'redux';
import {movieReducer} from './movieReducer';
import {favoritesReducer} from './favoritesReducer'

const rootReducer = combineReducers({movieReducer, favoritesReducer});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;