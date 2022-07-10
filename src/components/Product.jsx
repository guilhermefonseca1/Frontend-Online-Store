import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

export default class Product extends Component {
  render() {
    const { id, price, thumbnail, title } = this.props;
    return (
      <Link
        to={ `/productDetail/${id}` }
        data-testid="product-detail-link"
      >
        <div
          className="Product"
          data-testid="product"
        >
          <p className="product-id">{ id }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{title}</p>
          <p>{`R$ ${price}`}</p>
        </div>
      </Link>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
