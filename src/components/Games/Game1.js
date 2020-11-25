import React from 'react';
import {Link} from 'react-router-dom';

const Game1 = (props) => {
    return(
        <div className="Game1">
            <h1>Beat The Gif</h1>
            <p>The objective of this game is simple, finish chugging your drink before the gif drinks their drink.</p>
            <p>GoodLuck and Game On!</p>
            <p>... or should I say CHUG ON!</p>
            <img className="BeerChugGif" src="https://i.gifer.com/3Whw.gif" alt="Beat Me"></img>
        </div>
    )
}

export default Game1;