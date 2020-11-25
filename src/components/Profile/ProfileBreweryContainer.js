import React from'react';
import ProfileBreweries from './ProfileBreweries'

const ProfileBreweryContainer = (props) => {

    return(
        <div className='profileBreweryContainer'>
            <h1 className='bottomBorder'>Breweries I Want to Visit</h1>
            {props.loggedInUser.userBrews.map((brews, id) => {
                return (
                    <ProfileBreweries 
                        handleRemove = {props.handleRemove} 
                        addFavoriteBrew = {props.addFavoriteBrew}
                        addTriedBrew = {props.addTriedBrew}
                        brews={brews} 
                        key={id} 
                        brewId = {id} 
                    />
                )
            })}
        </div>
    )
}

export default ProfileBreweryContainer;