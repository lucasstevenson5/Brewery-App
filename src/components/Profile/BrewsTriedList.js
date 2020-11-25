import React from 'react';

const BrewsTriedList = (props) => {
    return(
        <div className='bottomBorder'>
            <h2>{props.brew.name}</h2>
            <p>{props.brew.city}, {props.brew.state}</p>
            <button onClick = {() => {props.removeTriedBrew(props.brewId)}}>Remove</button>
        </div>
    )
}

export default BrewsTriedList;