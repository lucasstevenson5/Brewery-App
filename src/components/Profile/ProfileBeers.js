import React, {Component} from 'react';

class ProfileBeers extends Component {
    render() {
        return(
            <div className='bottomBorder'>
                <h2>{this.props.beer.name}</h2>
                <button onClick={()=> this.props.handleRemove(this.props.beerId, true)}>Remove</button>
                <button onClick = {() => this.props.addFavoriteBeer(this.props.beerId)}>Add to Favorites</button>
                <button onClick = {() => this.props.addTriedBeer(this.props.beerId)}>Add to Tried Beers</button>
            </div>
        )
    }
}

export default ProfileBeers;