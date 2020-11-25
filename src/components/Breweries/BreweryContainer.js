import React, { Component } from "react";
import BreweryList from "./BreweryList";

class BreweryContainer extends Component{
    constructor(props){
        super(props);

        this.state = ({
            search: ""
        })
    }

    onChange = (event) => {
        event.preventDefault();
        this.setState({
            search: event.target.value.toLowerCase()
        })
    }

    render() {
        return(
            <div className="BreweryContainer"> 
                <div className="BreweryListHeader">
                    <h1>Brewery List</h1> 
                    <form>
                        <input className = 'search'
                        type = 'text'
                        name = 'state'
                        placeholder = 'Search by Brewery, City, or State'
                        onChange = {this.onChange}
                        />
                    
                    </form>
                </div>

                {this.props.flag ? 
                    <div className="BreweryContainer">
                         {this.props.breweries.map((breweries, id) => (
                            breweries.name.toLowerCase().includes(this.state.search) ||
                            breweries.state.toLowerCase().includes(this.state.search) ||
                            breweries.city.toLowerCase().includes(this.state.search)
                            ?
                            <BreweryList 
                                breweries={breweries} 
                                handleAdd={this.props.handleAdd} 
                                key={id}
                                brewId={id} 
                                loggedIn={this.props.loggedIn}
                                handleUp = {this.props.handleUp} 
                                handleDown = {this.props.handleDown}
                                upvoteState = {this.props.upvoteState}
                                downvoteState = {this.props.downvoteState}
                                />
                            : null
                        ))}
                    </div>
                :
                    <div></div>
                }                   
            </div>
        )
    }
}

export default BreweryContainer;