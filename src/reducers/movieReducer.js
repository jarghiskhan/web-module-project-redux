import { createStore } from 'redux';
import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

export const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MOVIE:{
            return{
                ...state,
               movies:[...state.movies, action.payload]
            }
        }
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());