import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { id, price, thumbnail, title } = this.props;
    return (
      <div
        className="Product"
        data-testid="product"
      >
        <p className="product-id">{ id }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{title}</p>
        <p>{price}</p>
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
