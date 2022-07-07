import React, { Component } from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends Component {
  componentDidMount() {
    this.showCategories();
  }

  showCategories = async () => {
    console.log(await getCategories());
  }

  render() {
    return (
      <div className="App" />
    );
  }
}

export default App;
