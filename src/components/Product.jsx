import { MinusCircle, PlusCircle } from 'phosphor-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromLocalStorage,
  setProductsFromLocalStorage } from '../services/api';
import '../styles/Product.css';

export default class Product extends Component {
  constructor(props) {
    super(props);
    const { qnt } = this.props;
    this.state = {
      productQuantity: qnt,
    };
  }

  handleQuantity = ({ target }) => {
    const { id } = target;
    let { productQuantity } = this.state;
    if (id === 'plus') {
      productQuantity += 1;
    } else if (id === 'minus') {
      productQuantity -= 1;
    }
    this.setState({
      productQuantity: productQuantity === 0 ? 1 : productQuantity,
    });
  }

  addToCart = () => {
    const { id, price, thumbnail, title } = this.props;
    const { productQuantity: qnt } = this.state;
    const cartItems = getProductsFromLocalStorage();
    // console.log(cartItems);
    if (cartItems) {
      const newCartItems = [...cartItems, { id, price, thumbnail, title, qnt }];
      return setProductsFromLocalStorage(newCartItems);
    }
    const newCartItems = [{ id, price, thumbnail, title, qnt }];
    return setProductsFromLocalStorage(newCartItems);
  }

  render() {
    const { productQuantity } = this.state;
    const { id, price, thumbnail, title } = this.props;
    return (
      <div className="Product">
        <Link
          to={ `/productDetail/${id}` }
          data-testid="product-detail-link"
        >
          <div
            data-testid="product"
            className="ProductInfo"
          >
            <p className="product-id">{ id }</p>
            <img src={ thumbnail } alt={ title } />
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p>{`R$ ${price}`}</p>
          </div>
        </Link>
        <div className="addToCart">
          <PlusCircle
            id="plus"
            data-testid="product-increase-quantity"
            size={ 28 }
            onClick={ this.handleQuantity }
          />
          <div className="productQuantity">
            <p data-testid="shopping-cart-product-quantity">
              {productQuantity}
            </p>
          </div>
          <MinusCircle
            id="minus"
            data-testid="product-decrease-quantity"
            size={ 28 }
            onClick={ this.handleQuantity }
          />
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ this.addToCart }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  qnt: PropTypes.number,
};

Product.defaultProps = {
  qnt: 1,
};
