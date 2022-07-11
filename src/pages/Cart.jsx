import React, { Component } from 'react';
import { getProductsFromLocalStorage } from '../services/api';
import '../styles/Cart.css';
import Product from '../components/Product';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const cartItems = getProductsFromLocalStorage();
    if (cartItems) {
      this.setState({
        cartItems,
      });
    }
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="wrapper">
        <div className="centerContent">
          {
            cartItems.length === 0
              ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
              : cartItems.map(({
                id,
                price,
                title,
                qnt,
                thumbnail,
              }) => (
                <Product
                  key={ id }
                  id={ id }
                  title={ title }
                  price={ price }
                  thumbnail={ thumbnail }
                  qnt={ qnt }
                />))
          }
        </div>
      </div>
    );
  }
}
