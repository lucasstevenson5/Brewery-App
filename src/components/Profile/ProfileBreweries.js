import React, {Component} from 'react';

class ProfileBreweries extends Component {
    render() {
        return(
        <div className='bottomBorder'>
                <h2>{this.props.brews.name}</h2>
                <p>{this.props.brews.city}, {this.props.brews.state}</p>
                <button onClick={()=> this.props.handleRemove(this.props.brewId, false)}>Remove</button>
                <button onClick = {() => this.props.addFavoriteBrew(this.props.brewId)}>Add to Favorites</button>
                <button onClick = {() => this.props.addTriedBrew(this.props.brewId)}>Add to Visited Breweries</button>
            </div>
        )
    }
}

export default ProfileBreweries;