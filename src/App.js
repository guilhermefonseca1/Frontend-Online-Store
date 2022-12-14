import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import FinishBuy from './pages/FinishBuy';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/finishBuy" component={ FinishBuy } />
          <Route path="/productDetail/:id" component={ ProductDetail } />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
