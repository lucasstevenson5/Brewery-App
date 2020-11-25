import React, { Component } from 'react';

class BACCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sex: null,
            weight: 0,
            numberOfBeers: 0,
            hoursSinceStart: 0,
            BAC: 0
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    calculateBAC = (e, input) => {
        e.preventDefault();
        let constant = 0;
        if(input.sex == "male") {
            constant = 0.68;
        } else if (input.sex == "female") {
            constant = 0.55;
        } else {
            alert('Need to input a sex');
            return;
        }
        let actualNumOfBeer = input.numberOfBeers - (input.hoursSinceStart / 2);
        let ounces = (12 * actualNumOfBeer * .05);
        let millilitres = (ounces * 29.6);
        let grams = (millilitres * 0.79);
        let volume = (input.weight * 0.45 * 1000);
        let BAC = (grams / (volume * constant)) * 100;
        BAC = BAC.toFixed(3);
        this.setState({
            BAC: BAC
        })
    }

    render() {
        return(
            <div className="bacBorder">
                <h1 className="calculator">Guess Your BAC</h1>
                <div className="bacContainer">
                    <form onSubmit={(e) => this.calculateBAC(e, this.state)}>
                        <div>
                            Sex: <select id="sex" name="sex" onChange={this.onChange}>
                                <option value="choose sex">Choose Sex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            Weight: <input 
                                id="weight"
                                type="text"
                                name = 'weight'
                                placeholder = 'Your Weight in lbs'
                                onChange = {this.onChange}
                            />
                        </div>
                        <div>
                            Number of Beers: <input 
                                id="numOfBeers"
                                type="text"
                                name = 'numberOfBeers'
                                placeholder = 'Assumes 12oz and 5% ABV'
                                onChange = {this.onChange}
                            />
                        </div>
                        <div>
                            Hours since First Beer: <input 
                                id="hours"
                                type="text"
                                name = 'hoursSinceStart'
                                placeholder = 'When did you start?'
                                onChange = {this.onChange}
                            />
                        </div>
                        <div id="centerSubmit">
                            <input className="hovereffect" type="submit" value="Guestimate My BAC"/>
                        </div>
                    </form>
                </div>
                {this.state.BAC > 0 &&
                    <h3 className="centerBAC">Your very loosely estimated BAC is {this.state.BAC}</h3>
                }
                {this.state.BAC < 0 &&
                    <h3 className="centerBAC">The alcohol seems to have left your system</h3>
                }
            </div>
        )
    }
}

export default BACCalculator;