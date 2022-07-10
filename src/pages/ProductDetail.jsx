import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductFromId } from '../services/api';
import '../styles/ProductDetail.css';

export default class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductFromId(id);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    if (!product) return 'Carregando...';
    const { product: {
      attributes,
      pictures,
      title,
      price,
    } } = this.state;
    return (
      <section className="ProductDetail">
        <div className="ProductImages">
          {
            pictures.map(({ id, secure_url: url }) => (<img
              key={ id }
              src={ url }
              alt="productImage"
            />))
          }
        </div>
        <div className="centerContent">
          <header>
            <h1 data-testid="product-detail-name">{title}</h1>
          </header>
          <div>
            <img src={ pictures[0].url } alt="" />
          </div>
        </div>
        <div className="sideContent">
          <div className="cartInfo">
            <p>{`R$: ${price}`}</p>
            <button type="button">Add to Cart</button>
          </div>
          <section className="productAttributes">
            {
              attributes.map(({ name, value_name: valueName, id }) => (
                <div
                  key={ id }
                >
                  <p className="attrTitle">{name}</p>
                  <p className="attrValue">{valueName}</p>
                </div>
              ))
            }
          </section>
        </div>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
