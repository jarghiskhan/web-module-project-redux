import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../actions/favoritesActions";

const FavoriteMovieList = (props) => {
const displayFavorites = props.displayFavorites;

  const handleRemoveFavorite = (e, movie) => {

    props.removeFavorite(movie);
  };

  const favorites = props.favorites;
  
  return (
   <>
    {props.displayFavorites ? (<><div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span class="material-icons" onClick={e=>handleRemoveFavorite(e, movie)} >remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div></>):(<></>)} 
   </> 
  );
};

const mapStateToProps = ({ favoritesReducer }) => {
  return {
    favorites: favoritesReducer.favorites,
    displayFavorites: favoritesReducer.displayFavorites,
  };
};
export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);
