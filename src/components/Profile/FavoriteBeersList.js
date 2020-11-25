import React from 'react';

const FavoriteBeersList = (props) => {
    return (
        <div className='bottomBorder'>
            <h2>{props.beer.name}</h2>
            <button onClick={()=> props.removeFavoriteBeer(props.beerId)}>Remove</button>
        </div>
    )
}

export default FavoriteBeersList;