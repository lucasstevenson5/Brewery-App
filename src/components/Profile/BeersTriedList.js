import React from 'react';

const BeersTriedList = (props) => {
    return(
        <div className='bottomBorder'>
            <h2>{props.beer.name}</h2>
            <button onClick = {() => {props.removeTriedBeer(props.beerId)}}>Remove</button>
        </div>
    )
}

export default BeersTriedList;