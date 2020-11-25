import React, {Component} from 'react';
import ProfileBeers from "./ProfileBeers";
import FavoriteBeersList from "./FavoriteBeersList";

const FavoriteBeersContainer=(props) =>{
    return(
        <div className='favoriteBeersContainer'>
            <h1 className='bottomBorder'>Favorite Beers List</h1>
                {props.loggedInUser.userFavoriteBeers.map((beer, id) => {
            return (<FavoriteBeersList
                handleRemove = {props.handleRemove} 
                addFavoriteBeer = {props.addFavoriteBeer}
                removeFavoriteBeer={props.removeFavoriteBeer}
                beer={beer} 
                key={id} 
                beerId = {id} />)
            })} 

        </div>
    )
}

export default FavoriteBeersContainer;