import { ADD_FAVORITES, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";
const initialState = {
  favorites: [],
  displayFavorites: false,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
        return{
            ...state,
            favorites: 
            [...state.favorites,
                action.payload]
        }
    case REMOVE_FAVORITE:
        return{
            ...state,
            favorites:
            [...state.favorites.filter(movie => movie !== action.payload)]          
            }
    case TOGGLE_FAVORITES:
        return{
            ...state,
            displayFavorites: !state.displayFavorites
        }
    default:
      return state;
  }
};



