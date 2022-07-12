import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ArrowLeft, Check } from 'phosphor-react';
import { getProductsFromLocalStorage } from '../services/api';
import '../styles/Cart.css';
import Product from '../components/Product';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      totalPrice: 0,
    };
  }

  componentDidMount() {
    const cartItems = getProductsFromLocalStorage();
    if (cartItems) {
      this.setState({
        cartItems,
      }, () => this.getTotalPrice());
    }
  }

  prevPage = () => {
    const { history } = this.props;
    history.goBack();
  }

  getTotalPrice = () => {
    const { cartItems } = this.state;
    const totalPrice = cartItems
      .map(({ price, qnt }) => price * qnt).reduce((curr, acc) => acc + curr);
    this.setState({
      totalPrice,
    });
  }

  goToFinish = () => {
    const { history } = this.props;
    history.push('/finishBuy');
  }

  render() {
    const { cartItems, totalPrice } = this.state;
    return (
      <div className="wrapper">
        <header className="cartHeader">
          <div>
            <ArrowLeft
              size={ 32 }
              onClick={ this.prevPage }
            />
          </div>
          <div>
            <p>{`Valor total: R$ ${totalPrice}`}</p>
          </div>
          <div>
            <button
              className="buttonFinalizar"
              type="button"
              onClick={ this.goToFinish }
              data-testid="checkout-products"
            >
              Finalizar Compra
              <Check
                size={ 32 }
              />
            </button>
          </div>
        </header>
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

Cart.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};
