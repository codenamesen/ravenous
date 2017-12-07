import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import BusinessList from '../BusinessList/BusinessList.js';
import Yelp from '../../util/Yelp.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({business: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses}  />
      </div>
    );
  }
}

export default App;
