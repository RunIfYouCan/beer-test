import React, { Component } from 'react';
import Header from "./components/header";
import BeerCardList from "./components/beerCardList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BeerCardList />
      </div>
    );
  }
}

export default App;
