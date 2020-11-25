import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
        <div>
            <div className="space">space</div>
            <nav className="LinkNavBar">
                <Link className="LinksInNavBar" to="/BreweryList">Brewery List</Link>
                <Link className="LinksInNavBar" to="/BeerList">Beer List</Link>
                <Link className="LinksInNavBar" to="/Games/bacCalculator">Drinking Games</Link>
                {props.loggedIn && <Link className="LinksInNavBar" to="/profile/beers">Your Profile</Link>}
            </nav>
            <div className="space">space</div>
        </div>
    )
}

export default Home;