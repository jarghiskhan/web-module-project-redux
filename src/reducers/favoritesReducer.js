import { ADD_FAVORITES, TOGGLE_FAVORITES } from "../actions/favoritesActions";
const initialState = {
  favorites: [],
  displayFavorites: false,
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
          ...state,
          favorites:{...state, }
      };
    case TOGGLE_FAVORITES:
      return {};
    default:
      return state;
  }
};


