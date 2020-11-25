import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import { Route, withRouter } from 'react-router-dom';

import Header from './components/Home/Header';
import SignUp from './components/Login-SignUp/SignUp';
import Login from './components/Login-SignUp/Login';
import Profile from './components/Profile/Profile';
import BreweryContainer from "./components/Breweries/BreweryContainer";
import HomePageDisplay from "./components/Home/HomePageDisplay";
import BeerContainer from "./components/Beers/BeerContainer";
import beers from "./beers.json";
import DrinkingGames from "./components/Games/DrinkingGames";
import Footer from './components/Home/Footer';
import states from './states.json';

const AllBreweriesURL = "https://api.openbrewerydb.org/breweries?by_state=new_york&per_page=50";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      breweries: "",
      beers: [],
      users: [{
        name: "Random User",
        age: 0,
        username: "username",
        password: "password",
        userBrews: [
          {
            name: 'Avendale Beer Company',
            city: 'Birmingham',
            state: 'Alabama'
          },
          {
            name: 'Black Forest Brew Haus',
            city: 'Farmingdale',
            state: 'New York'
          }
        ],
        userFavoriteBrews: [
          {
            name: 'Avendale Beer Company',
            city: 'Birmingham',
            state: 'Alabama'
          },
          {
            name: 'Black Forest Brew Haus',
            city: 'Farmingdale',
            state: 'New York'
          }
        ],
        userTriedBrews: [
          {
            name: 'Avendale Beer Company',
            city: 'Birmingham',
            state: 'Alabama'
          },
          {
            name: 'Black Forest Brew Haus',
            city: 'Farmingdale',
            state: 'New York'
          }
        ],
        userBeers: [
          {
           name: "Goose Island Ipa" 
          },
          {
           name: "Corona Extra" 
          } 
        ],
        userFavoriteBeers: [
          {
           name: "Bud Light" 
          },
          {
           name: "Busch Light" 
          },
          {
            name: "Coors Light" 
          }  
        ],
        userTriedBeer: [
          {
            name: "Bud Light" 
           },
           {
            name: "Busch Light" 
           },
           {
             name: "Coors Light" 
           } 
        ]
      }],
      loggedIn: false,
      flag: false,
      error: "",
      errorAddBeer: "",
      loggedInUser:[{}],
      upvoteState: false,
      downvoteState: false,
    }
  }

  // This is passed down through props to Signup page and grabs
  // the users input info and also initializes the new user with
  // multiple arrays that allows them to push beers and breweries
  // to their profile
  handleSignup = (e, userInfo) => {
    e.preventDefault();
    userInfo.userBrews = [];
    userInfo.userBeers = [];
    userInfo.userFavoriteBeers = [];
    userInfo.userFavoriteBrews = [];
    userInfo.userTriedBeer = [];
    userInfo.userTriedBrews = [];
    const users = this.state.users;
    let loggedInUser = this.state.loggedInUser;
    users.push(userInfo);
    loggedInUser.splice(0, 1, userInfo);
    this.setState({
      loggedInUser: loggedInUser[0],
      loggedIn: true
    })
    this.props.history.push('/profile/beers');
  }

  // This is passed down through props to Login page and grabs
  // the users input info and checks it versus the hard coded users
  // array that would ideally be a backend and give them access to 
  // their profile page
  handleLogin = (e, userInfo) => {
    e.preventDefault();
    const users = this.state.users;
    // utilized a filter to filter through the users array and return
    // the only user whose username and password matched
    const filteredUser = users.filter(
      user => {
        return user.username === userInfo.username && user.password === userInfo.password
      }
    )
    // if - else statement for checking if a user was found from the
    // filter and throwing an error message
    if(filteredUser.length > 0) {
      this.setState({
        loggedIn: true,
        error: "",
        loggedInUser: filteredUser[0]
      })
      this.props.history.push('/profile/beers');
    } else {
      this.setState({
        error: "Incorrect Credentials"
      })
    }
  }

  // this function is purely used to prevent the user from adding to their
  // profile after they log out and also pushes the user to the homepage
  handleLogout = (e) => {
    e.preventDefault();
    let loggedInUser = this.state.loggedInUser
    loggedInUser=[{}];
    this.setState({
      loggedIn: false,
      loggedInUser
    })
    this.props.history.push('/')
  }

  // Handle Add adds both breweries and beers to your profile with the use
  // of a single function. It is passed down to both brewery container and
  // beer container which then passes it down to both brewery list and beer
  // list. In the call, it passes through the id of the beer or brewery that
  // you are trying to add to your profile and also a true/false flag 
  handleAdd = (brewId, flag) => {
    // if true is passed, that means the user tried to add a beer
    if(flag) {
      const user = this.state.loggedInUser
      for (let i=0; i < user.userBeers.length; i++) {
        if (user.userBeers.includes(this.state.beers[brewId])){
          alert("You've already added this beer to your list")
          // exits function before adding beer if its already in their profile
          return
        }
      }
      user.userBeers.push(this.state.beers[brewId])
      this.setState({
          loggedInUser: user
      }) 
      this.props.history.push('/profile/beers'); 
    }
    // if false was passed, that means the user tried to add a brewery
    else{
      const user = this.state.loggedInUser
      for (let i=0; i < user.userBrews.length; i++) {
        if (user.userBrews.includes(this.state.breweries[brewId])) {
          alert("You've already added this brewery to your list")
          // exits function before adding brewery if its already in their profile
          return
        }
      }
      user.userBrews.push(this.state.breweries[brewId])
      this.setState({
          loggedInUser: user
      }) 
      this.props.history.push('/profile/breweries');    
    }
  }

  // Handle remove is very similar to handle add function directly above,
  // however, it removes the item instead. Its passed down the same and takes
  // the exact same inputs as handle add
  handleRemove = (brewId, flag) => {
    // true case is beers for handle remove, just like handle add
    if(flag){
      // multiple variables used to take a specific item out of the array
      const userBeers = this.state.loggedInUser.userBeers;
      const newBeers1 = userBeers.slice(0, brewId)
      const newBeers2 = userBeers.slice(brewId + 1, userBeers.length)
      const both = newBeers1.concat(newBeers2)
      const user = this.state.loggedInUser
      user.userBeers = both
      this.setState({
        loggedInUser: user
      })
    }
    // false case is breweries for handle remove, just like handle add
    else{
      const userBrews = this.state.loggedInUser.userBrews;
      const newBrews1 = userBrews.slice(0, brewId)
      const newBrews2 = userBrews.slice(brewId + 1, userBrews.length)
      const both = newBrews1.concat(newBrews2)
      const user = this.state.loggedInUser
      user.userBrews = both
      this.setState({
        loggedInUser: user
      })
    }
  }

  // Add favorite beer is different from the handle add function in that it
  // isnt dual purpose. This function is passed down to profile, then profile
  // beers container, finally to profile beers where it is called and passed
  // a unique id
  addFavoriteBeer = (brewId) => {
    const user = this.state.loggedInUser
    // this for loop checks to see if the user already has the beer they are
    // trying to add in their favorites list, if so, it sends an alert.
    // An alert was decided here since just adding text to the top may allow
    // the user to miss it if they have a long list of beers.
    for(let i = 0; i < user.userFavoriteBeers.length; i++) {
      if(user.userFavoriteBeers.includes(this.state.loggedInUser.userBeers[brewId])) {
        alert('beer already in favorites list')
        // if their is a match, then it breaks out of the function and doesnt
        // add a duplicate beer to their favorites.
        return
      } 
    }
    user.userFavoriteBeers.push(this.state.loggedInUser.userBeers[brewId])
    this.setState({
      loggedInUser: user
    })
     this.props.history.push('/profile/beers')
  }

  // Remove favorite beers is the same as add favorite beer, but it finds the beer
  // from the array and creates a few variable that take that beer out and 
  // create a new array without it then update state
  removeFavoriteBeer= (brewId) => {
    const userFavoriteBeers = this.state.loggedInUser.userFavoriteBeers;
    const newBeers1 = userFavoriteBeers.slice(0, brewId)
    const newBeers2 = userFavoriteBeers.slice(brewId + 1, userFavoriteBeers.length)
    const both = newBeers1.concat(newBeers2)
    const user = this.state.loggedInUser
    user.userFavoriteBeers = both
    this.setState({
      loggedInUser: user
    })
  }

  // Add tried beer is the same function as add favorite beer but adds it
  // to the tried beers container instead
  addTriedBeer = (brewId) => {
    const user = this.state.loggedInUser
    for(let i = 0; i < user.userTriedBeer.length; i++) {
      if(user.userTriedBeer.includes(this.state.loggedInUser.userBeers[brewId])) {
        alert('beer already in favorites list')
        return
      }
    }
    user.userTriedBeer.push(this.state.loggedInUser.userBeers[brewId])
    this.setState({
      loggedInUser: user
    })
    this.props.history.push('/profile/beers')
  }

  // Remove tried beer is the same as remove favorite beer but removes it
  // from the tried beers container instead
  removeTriedBeer = (brewId) => {
    const userTriedBeer = this.state.loggedInUser.userTriedBeer;
    const newBeers1 = userTriedBeer.slice(0, brewId)
    const newBeers2 = userTriedBeer.slice(brewId + 1, userTriedBeer.length)
    const both = newBeers1.concat(newBeers2)
    const user = this.state.loggedInUser
    user.userTriedBeer = both
    this.setState({
      loggedInUser: user
    })
  }

  // The add favorite brew is the same as add favorite beer, however, it is
  // passed down through props to the profile, then profile breweries container,
  // then finally the profile breweries where it is called. It then functions the 
  // same as add favorite beer
  addFavoriteBrew = (brewId) => {
    const user = this.state.loggedInUser
    for(let i = 0; i < user.userFavoriteBrews.length; i++) {
      if(user.userFavoriteBrews.includes(this.state.loggedInUser.userBrews[brewId])) {
        alert('brewery already in favorites list')
        return
      } 
    }
    user.userFavoriteBrews.push(this.state.loggedInUser.userBrews[brewId])
    this.setState({
      loggedInUser: user
    })
     this.props.history.push('/profile/breweries')
  }

  // Same as add favorite brew but it removes the brew
  removeFavoriteBrew= (brewId) => {
    const userBrews = this.state.loggedInUser.userFavoriteBrews;
    const newBrews1 = userBrews.slice(0, brewId)
    const newBrews2 = userBrews.slice(brewId + 1, userBrews.length)
    const both = newBrews1.concat(newBrews2)
    const user = this.state.loggedInUser
    user.userFavoriteBrews = both
    this.setState({
      loggedInUser: user
    })
  }

  // same as add favorite brew, but adds it to your tried breweries container
  addTriedBrew = (brewId) => {
    const user = this.state.loggedInUser
    for(let i = 0; i < user.userTriedBrews.length; i++) {
      if(user.userTriedBrews.includes(this.state.loggedInUser.userBrews[brewId])) {
        alert('Brewery already in tried list')
        return
      }
    }
    user.userTriedBrews.push(this.state.loggedInUser.userBrews[brewId])
    this.setState({
      loggedInUser: user
    })
    this.props.history.push('/profile/breweries')
  }
  // same as add tried brew, but removes the brew from the array
  removeTriedBrew = (brewId) => {
    const userTriedBrews = this.state.loggedInUser.userTriedBrews;
    const newBrews1 = userTriedBrews.slice(0, brewId)
    const newBrews2 = userTriedBrews.slice(brewId + 1, userTriedBrews.length)
    const both = newBrews1.concat(newBrews2)
    const user = this.state.loggedInUser
    user.userTriedBrews = both
    this.setState({
      loggedInUser: user
    })
  }

  // This allows the logged in user to interact with the "global" breweries
  // list and add upvotes to breweries they liked. This function is passed
  // through props to brewery container then to brewery list where it is called
  // with a unique id and a true or false flag depending on if they are trying to
  // add an upvote or remove an added upvote
  handleUp = (brewId, flag) => {
    const breweries = this.state.breweries;
    // if you click the upvote once, it will increase the upvotes then
    // update state of the flag inside the breweries state to be opposite of waht it was
    // so next time you click the upvote, it will run the else block
    if (!flag) {
      breweries[brewId].upvotes ++;
      breweries[brewId].upvoteState = !flag
      this.setState({
        breweries
      })
    } 
    // the else block removes your last upvote and brings the total upvotes
    // back to the original number
    else {
      breweries[brewId].upvotes --;
      breweries[brewId].upvoteState = !flag
      this.setState({
        breweries
      })
    }
  }
  
  // This function is the same as the handle up, however, it does the opposite
  // It will decrease the total votes when pressing once, then swap to bringing it
  // back to the original number if clicked again
  handleDown = (brewId, flag) => {
    const breweries = this.state.breweries;

    if (!flag) {
      breweries[brewId].upvotes --;
      breweries[brewId].downvoteState = !flag
      this.setState({
        breweries
      })
    } else {
      breweries[brewId].upvotes ++;
      breweries[brewId].downvoteState = !flag
      this.setState({
        breweries
      })
    }
  }

  // This function is the same as the handle up, however, for adding upvotes
  // to various beers on the beer list. it is passed through props to beer
  // container then to beer list where it is called and passes an unique id
  // and a true or false flag. It then acts the same as the handle up function.
  handleUpBeer = (brewId, flag) => {
    const beers = this.state.beers;
    if (!flag) {
      beers[brewId].upvotes ++;
      beers[brewId].upvoteState = !flag
      this.setState({
        beers
      })
    } 
    else {
      beers[brewId].upvotes --;
      beers[brewId].upvoteState = !flag
      this.setState({
        beers
      })
    }
  }
    
  // This function does the same as the handle up function, but the opposite,
  // it will decrease the overall votes by one if clicked once, or bring it back
  // to the original number if clicked again
  handleDownBeer = (brewId, flag) => {
    const beers = this.state.beers;
    if (!flag) {
      beers[brewId].upvotes --;
      beers[brewId].downvoteState = !flag
      this.setState({
        beers
      })
    } else {
      beers[brewId].upvotes ++;
      beers[brewId].downvoteState = !flag
      this.setState({
        beers
      })
    }
  }

  // This function is used and called by the component did mount function
  async renderAllBreweries() {
    let resp;
    let totalResp = [];
    // This for loop exists purely because the api limits your calls to
    // 50 results and that only allows you to get breweries from alabama
    // to california. So this loop iterates through every state and grabs as many
    // as 50 breweries from the state and concatenates them to an array
    for(let i=0; i < states.length; i++) {
      resp = await axios.get(`https://api.openbrewerydb.org/breweries?by_state=${states[i]}&per_page=50`);
      // This for loop adds random number of upvotes to the brewery info to
      // allow us to mock a backend. Also adds upvote and downvote state to 
      // individual brewery so you can click upvotes for each
      for(let i=0; i < resp.data.length; i++) {
        let upvote = Math.floor(Math.random() * 100);
        resp.data[i].upvotes = upvote;
        resp.data[i].upvoteState = false;
        resp.data[i].downvoteState = false;
      }
      totalResp = totalResp.concat(resp.data);
    }
    this.setState({
      breweries: totalResp,
      flag: true
    })
  }

  // ABOVE ASYNC FUNCTION RUNS SLIGHTLY SLOWER, THIS IS KEPT AS FAILSAFE

  // async renderAllBreweries() {
  //   const resp = await axios.get(AllBreweriesURL);
  //   for(let i=0; i < resp.data.length; i++) {
  //     let upvote = Math.floor(Math.random() * 100);
  //     resp.data[i].upvotes = upvote;
  //     resp.data[i].upvoteState = false;
  //     resp.data[i].downvoteState = false;
  //   }
  //   this.setState({
  //     breweries: resp.data,
  //     flag: true
  //   })
  // }

  
  // This function renders all beers from our beers.json file and puts them
  // into an array of objects
  renderAllBeers() {   
    const beerList = beers;    
    const beerArray = [];
    // The for loop is used to add more information to each individual beer
    // object, just like the breweries did   
    for(let i=0; i < beerList.length; i++) {      
      const beerObject = {};      
      let upvote = Math.floor(Math.random() * 100);      
      beerObject.name = beerList[i];      
      beerObject.upvotes = upvote;      
      beerObject.upvoteState = false;      
      beerObject.downvoteState = false;      
      beerArray.push(beerObject)    
    }    
    this.setState({      
      beers: beerArray    
    })  
  }

  // Calls both of these functions on render
  componentDidMount() {
    this.renderAllBreweries();
    this.renderAllBeers();
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state} handleLogout={this.handleLogout}/>
        <main>
          <Route exact path="/"
                    render={ (props) => {
                      return <HomePageDisplay {...this.state} />
                    }} 
          />
          <Route path="/signup" 
                 render={ (props) => {
                   return <SignUp 
                            handleSignup={this.handleSignup} 
                            {...this.state} />
                 }}
          />
          <Route path="/login" 
                 render={ (props) => {
                   return <Login 
                            handleLogin={this.handleLogin} 
                            {...this.state} />
                 }} 
          />
          <Route path="/profile"
                render={ (props) => {
                  return <Profile 
                    {...this.state} 
                    handleRemove = {this.handleRemove}
                    addFavoriteBeer = {this.addFavoriteBeer}
                    removeFavoriteBeer={this.removeFavoriteBeer}
                    addTriedBeer = {this.addTriedBeer}
                    removeTriedBeer = {this.removeTriedBeer}
                    addFavoriteBrew = {this.addFavoriteBrew}
                    removeFavoriteBrew = {this.removeFavoriteBrew}
                    addTriedBrew = {this.addTriedBrew}
                    removeTriedBrew = {this.removeTriedBrew}
                  />
                }} 
          />
          <Route path="/BreweryList"
            render={ (props) => {
              return <BreweryContainer 
                      renderAllBreweries={this.renderAllBreweries} 
                      breweries={this.state.breweries}
                      loggedIn={this.state.loggedIn}
                      {...this.props} 
                      {...this.state}
                      upvoteState={this.state.upvoteState}
                      downvoteState={this.state.downvoteState}
                      handleAdd = {this.handleAdd}
                      handleUp = {this.handleUp} 
                      handleDown = {this.handleDown}/> 
            }} 
          />
          <Route path="/BeerList"
            render={ (props) => {
              return <BeerContainer 
                        beers={this.state.beers}
                        loggedIn={this.state.loggedIn}
                        handleAdd = {this.handleAdd} 
                        {...this.props} 
                        {...this.state}
                        handleUpBeer = {this.handleUpBeer} 
                        handleDownBeer = {this.handleDownBeer}  
                      /> 
            }} 
          />
          <Route path="/Games"
            render={ (props) => {
              return <DrinkingGames
                        beers={this.state.beers}
                        {...this.props} 
                        {...this.state}  
                      /> 
            }} 
          />
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
