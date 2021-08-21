export const ADD_FAVORITES = "ADD_FAVORITES";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const addFavorites = (movie) =>{
    return({
        type: ADD_FAVORITES,
        payload: movie 
    })
}

export const toggleFavorites = ()=>{
    return({
        type: TOGGLE_FAVORITES,
    })
}