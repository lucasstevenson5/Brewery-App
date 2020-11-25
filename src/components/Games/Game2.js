import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from "styled-components";

class Game2 extends Component{
    constructor(props){
      super(props);
      this.state = {
        spin: false,
        spinDeg: 0,
      }
    }  
    
    spinBottle(){
        let spinDeg= this.state.spinDeg
        spinDeg =  720 + (Math.floor(Math.random() * 361));
        this.setState({
            spin: true,
            spinDeg
        })
    }

    render(){
      const { rotation } =  this.state;

      const rotate360 = keyframes`
        from {
            transform: rotate(0deg);
        }

        to{
            transform:rotate(${this.state.spinDeg}deg);
        }
      `
      const RotatingBeer = styled.div`
        animation: ${rotate360} 5s 1;
        width: 150px;
        height: 150px;
        margin:10px;
        display:flex;
        align-items: center;
        justify-content: center;
        transform: rotate(${this.state.spinDeg}deg)
      `
        return(
            <div className="Game2">
                <h1>Spin -N- Drink</h1> 
                <p className="game2margin">Take turns pressing spin and hope your luck is great!</p>
                <p className="game2margin">Feel free to assign the colors any reward/punishments you would like! Our suggestions are below.</p>
                <div className="game2container">
                    <div id="blue">You take a drink for 3 seconds</div>
                    <div id="yellow">Pick a friend to take a drink for 3 seconds</div>
                    <div id="pink">Entire table takes a drink for 2 seconds</div>
                    <div id="green">Everyone but you takes a drink for 2 seconds</div>
                    <div id="red">Finish your entire drink</div>
                </div>
                <button className="beerSpinButton hovereffect" onClick={() => {this.spinBottle()}}>Spin Bottle</button> 
                <ul className='pie'>
                    <li className='slice'>
                        <div id="first" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="second" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="third" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="fourth" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="fifth" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="sixth" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="seventh" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="eighth" className='slice-contents'></div>
                    </li>
                    <li className='slice'>
                        <div id="ninth" className='slice-contents'></div>
                    </li>
                    <RotatingBeer id="test"> 
                        <img className="BeerBottle" src="https://i.imgur.com/mPS5RYj.png" alt="beerbottle"></img>
                    </RotatingBeer>  
                </ul>
            </div>
        ) 
    }
}

export default Game2;