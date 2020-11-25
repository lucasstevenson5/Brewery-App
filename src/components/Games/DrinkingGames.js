import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Game1 from "./Game1";
import Game2 from "./Game2";
import BACCalculator from './BACCalculator';

const Games = (props) => {
    return(
        <div className="Games">
            <nav className="GamesNav">
                <Link className="LinksInNavBar" to="/Games/Game1">Beat The Gif</Link>     
                <Link className="LinksInNavBar" to="/Games/Game2">Spin -N- Drink</Link>
                <Link className="LinksInNavBar" to="/Games/bacCalculator">BAC Calculator</Link>
            </nav>
            <div className="space">space</div>
            <main>
                <Route path="/Games/Game1"
                    render={ (props) => {
                        return <Game1/> 
                    }} 
                />
                <Route path="/Games/Game2"
                    render={ (props) => {
                        return <Game2/> 
                    }} 
                />
                <Route path="/Games/bacCalculator"
                    render={ (props) => {
                        return <BACCalculator/> 
                    }} 
                />
            </main>
        </div>
    )
}

export default Games;