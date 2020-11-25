import React from 'react';

const FavoriteBrewsList = (props) => {
    return (
        <div className='bottomBorder'>
            <h2>{props.brew.name}</h2>
            <p>{props.brew.city}, {props.brew.state}</p>
            <button onClick={()=> props.removeFavoriteBrew(props.brewId, true)}>Remove</button>
        </div>
    )
}

export default FavoriteBrewsList;