import React from 'react'
import BeersTriedList from './BeersTriedList';

const BeersTriedContainer = (props) => {
    return(
        <div className='beersTriedContainer'>
            <h1 className='bottomBorder'>Beers I've Tried</h1>
            {props.loggedInUser.userTriedBeer.map((beer, index) => {
                return <BeersTriedList 
                beer = {beer} 
                key = {index} 
                beerId = {index}
                removeTriedBeer = {props.removeTriedBeer}/>
            })}
        </div>
    )
}

export default BeersTriedContainer;