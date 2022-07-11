import React, { Component } from 'react';
import { getProductsFromLocalStorage } from '../services/api';

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
        {
          cartItems.length === 0
            ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
            : cartItems.map(({ id, price, title, qnt }) => (
              <div
                key={ id }
              >
                <p>
                  {`R$ ${price}`}
                </p>
                <p data-testid="shopping-cart-product-name">
                  {title}
                </p>
                <p data-testid="shopping-cart-product-quantity">
                  {qnt}
                </p>
              </div>

            ))

        }

      </div>
    );
  }
}
