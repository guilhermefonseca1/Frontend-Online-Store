import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { getCategories } from './services/api';
import ProductList from './pages/ProductList';

class App extends Component {
  componentDidMount() {
    this.showCategories();
  }

  showCategories = async () => {
    console.log(await getCategories());
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
