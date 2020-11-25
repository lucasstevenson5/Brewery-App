import React, {Component} from "react";

class BreweryList extends Component{
    render(){
        return(
            <div className="BreweriesList">
                <h2 className="BreweryName">{this.props.breweries.name}</h2>
                <a className="BreweryStreet" href={`http://maps.google.com/?q=${this.props.breweries.street},${this.props.breweries.city},${this.props.breweries.state},${this.props.breweries.postal_code}`} target="_blank">{this.props.breweries.street} </a>
                <p className="BreweryAddress">{this.props.breweries.city}, {this.props.breweries.state}</p>
                <p className="BreweryPhone">Phone: {this.props.breweries.phone}</p>
                <div className='website'>
                    Website:<a className="BreweryWebsite" href={this.props.breweries.website_url} target="_blank">{this.props.breweries.name}</a>
                    {this.props.loggedIn && 
                        <button className = 'addBeer' onClick={() => this.props.handleAdd(this.props.brewId, false)}>Add to my Profile</button>
                    }
                </div>
                <div className='vote'>
                    <p className='upvote'>Upvotes: {this.props.breweries.upvotes}</p>
                    {this.props.loggedIn &&
                        <img className="small" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADvCAMAAABfYRE9AAAAgVBMVEX29vZDukT8+vw+uT9uxm5BukL0+/Q1tDfc8dxTu1T59/nW7tb29vU3tjj8+/z6+/rk9uSz4bPT79NLuEzx+vDA58CX1ZhDtkSm26bM7MzE6MXp+OlnwWd9yn2P0Y+g2aGv36+GzoZgv2Aury54x3hgv2Gi2aJZvFhzxXK547lux25+VnckAAAFBElEQVR4nO2djVLiMBSFSUsohLQooICirrr+7fs/4JbqztKUnya57U2Y840PkG8Ye+g5rQ4GAAAAALgotOI+AT3FdMZ9BGqSzetTwX0IWtR0lWbXFyWlriapkNldwn0QOtTyJRVCyNX8Yi4UavS5UxIiXYwvQkoPBrOHXHyTftxfhNRg9vhPqZTaLpXmPpA/yfq/khD57xH3gfxJvjIp9qWeo89edVdXEjKPOXt3vzdqvqorlVLZr6hjSl0tUmEis5uIpdT9R1Mp7uxVy2F+QKmUijd7Rw+HlcqYmpTZG2NO7WdtQ6rMXu7zOVA8ZUeVypj6jDB7k+vMvIrXpeLL3uTmtFIpdRtZ9qq5PKMkRGTZq8aLs0q77I3okzqStXWj8kduorn4qeX2rNK312oah5QejH4fD6Y66eQqAil9OmsbUm8RZK8us7a9UpW94UsVv84FkyEVfvaez9qG1GPgUmpzPmsNZLYOOqbUeNXuKl6X+gr4C0VVi9sj07tgrxNq+eai9H0zr4O8R1SjT5ur+D7pJNCb+dmzq1Ip9RJkkT67dVcqpYYBfqEo1rbBVCd/CC6mii8/pQCzN9mknkrBFelq2qjFHciuA8reg7W4PSGN2D8TNIFUOEX6aEijFNCI7ZO1DakwRmy/rG1IhVCkJ+uc4JL3g6xGbG6pc7W4PezZm9x5Z21T6rbgvO84MEH7wztiqzFJ1jal+EbsNrW4m5Tkyl613FJexWtSXNl7fIL2pxqx+8emFneQ4sheu1rcHoYinT5rG1J9F+mJ+bhXF1L9jtidZK1Jv0W6Uy3uItVfka7unWpxB6m0rxG79QRNINXXiN1+gvanpxGb8la9hdTLsvun4mYnH/eip4fsTSwnaAKp546firOfoAmkHjuNKYcJ2h+Zd5m9NLW4vVSH2dtb1jalqhG7g8sfWS3uINVV9rpP0P6ki06yt9+sbUh1UaTT1uIOUvQjNmkt7kT+QJy95ptZLFK0Rbryn6AppN6pslezZa2JJBuxNdUE7Q/ZiK0Zs9ZECpoiXdFN0P4QFemzDmtxeyiyV3FnrQlBke77uBc93m9ih5C1Jp7Z20ctbo/XA2S91OL2+IzYwWRtHekxYnc2QfvjOmKrUW+1uD1yZZu9VZkRVtaaOI3Y3U7Q/ji8DVa8h63kUKQn1/02/S5YjthhZq1JNWK3LTLVXESgtMvellJaq3GQXx+atC7SNVstbk/bEdv5zSwO2hTpmrcWt6dVkc5bi9tTjdinKW5juIrvczZ7+5+g/TmTvRwTtD8nHyBT8xBqcXt2I7Y+nL3RZK3JsezV5X1tkLfqbZDZ5uCIHVXWmhzOXo+3oEOgyl7zc4ota03Sj0b2FoHV4vakW6NzLtaxK1VvYu9/UiHW4vbUinS1uQQlIbL/I3YgE7Q//0bsaoLOUx9Iz+V1kvT15vtXSj9vhz78oSxk5Hb4x+csw596NkmSInFnNCF8mTW78jjJTuTQ9z57aJ3CeDmc0knAqTPgBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLuAEJy7gBCcu4AQnLi7ybz8uMjpew3DS4ykhxP/41xVFCbcMAAAAAFrzF7PrmPn0WTO0AAAAAElFTkSuQmCC" 
                        onClick={() => this.props.handleUp(this.props.brewId, this.props.breweries.upvoteState)} />
                    }
                    {this.props.loggedIn &&
                        <img className="small" src="https://www.clipartkey.com/mpngs/m/95-950756_hd-th-lets-upvote-transparent-background-red-down.png" 
                        onClick={() => this.props.handleDown(this.props.brewId, this.props.breweries.downvoteState)} />
                    }
                </div>
            </div>
        )
    }
}

export default BreweryList;