# Project Overview

## Brewery App 
![Alt Text](https://i.imgur.com/FagxFB2.gif)

## Project Description

The goal of our app is to create a brewery finder and beer rater for beer lovers. A user can add a rating of a brewery they find on the brewery list if they have visited the brewery. Users can also add a brewery to there personal profile. Within a users profile a user can add their favorite brewery to a favorite brewery list, add any brewery a user has visited to their visited brewery list and a user could also add future brewery's they want to visit to a want to visit brewery list. 


 
## Project Links
Below are links to navigate to our project repository and deployed website link. 
- GitHub Repo = [Brewery App Repo](https://github.com/JGeorgos24/Brewery-App)
- Deployment = [CervezApp Link](http://cervezapp.surge.sh/) 


## Wireframes
Inserted below is a navigational link to a PDF slideshow of our wireframes for our project.
- Wireframes and Website Architecture = [Brewery App Wireframes](https://docs.google.com/presentation/d/e/2PACX-1vQGhbN6tlgpTGiFedmoJlix-uZPbPT5lukzV21qcrfIY3eh_koXkil23hUqVGZH_5tiqkTe4BVSiRz4/pub?start=true&loop=true&delayms=5000)


## User Stories
Below are links to navigate to our project repository and deployed website link. 
1. As a user I want to be able to access the CervezApp website if I have the correct website URL. 
2. As a unregister user I want to be able to sign up and create my own CervezApp user profile.
3. As a registered user I want to be able to login to the CervezApp website with my username and password. 
4. As a registered user I want the CervezApp to tell me if I logged in with an incorrect username and/or password.
5. As a user I want to be able to render a list of breweries. 
6. As a user I want to be able to filter through breweries by the breweries state/city location.
7. As a registered user I want to be able to add breweries to my brewery profile page. 
8. As a registered user I want to be able to render my brewery profile page to see my brewery list. 
9. As a registered user I want to be able to render my beer profile page to see my beers list.
10. As a user I want to be able to sign out of my CervazApp.
	

### MVP/PostMVP 
The functionality of our website will be broken down into separate list: MVP and Post MVP. MVP will be the minimum viable product our client expects to see out of our website. Post MVP will be any additional product we can add to our website to improve functionality and styling.

#### MVP for Brewery App
- A front-end React application that updates the UI and makes requests to the API.
- Include data from a third-party API. In our case we would use a brewery API. 
- Create a GitHub Repo with all project members as collaborators.
- Establish a gitwork flow so all collaborators can save and upload properly.  
- Have a header with website title and signup/login features.
- Construct a nav bar to navigate to brewery list page, brewery's near you, and a users profile. 
- Use react-router and react-router-dom to navigate to different link/pages. 
- Use axios to get a API request.
- Allow uses to add beers and breweries to their users profile. 
- Filter breweries based on breweries geographical location. 


#### PostMVP for Brewery App
- Add drinking games to the app to play.
- Search feature to search for specific brewery and/or beers. 
- Incorporate Google Maps. 
- Improve CSS styling. 



## Code Snippet
Use this section to include a brief code snippet of functionality that we are proud of an a brief description. 
 

```
Code Snippet

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

```
