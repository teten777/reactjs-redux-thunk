import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ItemList from "./components/ItemList"

class App extends Component {
  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}

export default App;
