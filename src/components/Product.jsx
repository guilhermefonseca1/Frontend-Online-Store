import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromLocalStorage,
  setProductsFromLocalStorage } from '../services/api';
import '../styles/Product.css';

export default class Product extends Component {
  // constructor() {
  //   super();
  // }

  addToCart = () => {
    const { id, price, thumbnail, title } = this.props;
    const cartItems = getProductsFromLocalStorage();
    // console.log(cartItems);
    if (cartItems) {
      const newCartItems = [...cartItems, { id, price, thumbnail, title, qnt: 1 }];
      return setProductsFromLocalStorage(newCartItems);
    }
    const newCartItems = [{ id, price, thumbnail, title, qnt: 1 }];
    return setProductsFromLocalStorage(newCartItems);
  }

  render() {
    const { id, price, thumbnail, title } = this.props;
    return (
      <div className="Product">
        <Link
          to={ `/productDetail/${id}` }
          data-testid="product-detail-link"
        >
          <div
            data-testid="product"
          >
            <p className="product-id">{ id }</p>
            <img src={ thumbnail } alt={ title } />
            <p>{title}</p>
            <p>{`R$ ${price}`}</p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addToCart }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
