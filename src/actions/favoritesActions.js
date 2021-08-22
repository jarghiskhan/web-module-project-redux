export const ADD_FAVORITES = "ADD_FAVORITES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const addFavorites = (movie) =>{
    return({
        type: ADD_FAVORITES,
        payload: movie 
    })
}
export const removeFavorite = (movie) =>{
    return({
        type: REMOVE_FAVORITE,
        payload: movie
    })
}

export const toggleFavorites = ()=>{
    return({
        type: TOGGLE_FAVORITES,
    })
}