import React, { Component } from 'react';
import axios from 'axios';
import {  
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

//Components
import apiKey from './config.js';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer'
import SearchForm from './components/SearchForm';


class App extends Component {
  
 //Defines initial state inside class App
  constructor() {
    super(); //lets us use keyword 'this' w/in context of App rather than parent component class extended from react 
    this.state = {
      photos: [], //collection of objects
      query: '',
      isLoading: true
      
    };

  }

  //Loads new data immediately after component gets mounted to DOM
  componentDidMount() {
    this.newSearch();
  }

/**
 * Fetch data from Flickr API's search endpoint using axios (returns response in JSON format)
 * @param {string} query - search value, defaults to 'cats'
 * Updates state using response data
 * Note: apiKey const should be added to your own config.js file within src directory
 */
newSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`)
    .then(res => {
      console.log(res)
      this.setState({
        photos: res.data.photos.photo,
        query: query,
        isLoading: false
      });
    })
    .catch(err => {
      console.log('Error fetching and parsing data', err)
    });
  }

  //Passes value of e.target's id to newSearch() function => fetches new data 
  handleClick = e => {
    const query = e.target.id;
    this.newSearch(query);
  }

/**
 * If current props object pathname is not equal to prevProps pathname, updates component
 * @param {object} prevProps - previous props passed to component
 * @param {string} pathName - passed to newSearch() to fetch new data; defaults to 'cats' if pathname is === to root '/'
 */
componentDidUpdate(prevProps){
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const pathName =
        this.props.location.pathname !== '/' 
        ? this.props.location.pathname.slice(1) //removes '/' from path
        : 'cats';
      this.newSearch(pathName);
    }
  }

/**
 * Renders App and child components
 * Routes render PhotoContainer component based on query results passed in via state props
 * Will display "Loading..." while data is being fetched
 */
render() {
    console.log(this.state.query)
    return(
      <div className='container'>
      <BrowserRouter>
        <SearchForm onSearch={this.newSearch} />
        <Nav navSelection={this.handleClick}/>
        {
          (this.state.isLoading)
          ? <h2>Loading...</h2>
          : 
        <Switch>
          <Route exact path='/' render={() => <PhotoContainer data={this.state.photos} query={this.state.query} />} />
          <Route path='/:query' render={() => <PhotoContainer data={this.state.photos} query={this.state.query}/>} />
        </Switch>
        }
      </BrowserRouter>
      </div>
    );
  }

}
export default withRouter(App);
