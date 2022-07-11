import { ShoppingCart } from 'phosphor-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Form from '../components/Form';
import { getProductFromId, getProductsFromLocalStorage,
  setProductsFromLocalStorage } from '../services/api';
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

  addToCart = () => {
    const { product: {
      thumbnail,
      id,
      price,
      title,
    } } = this.state;
    console.log(id, price);
    const cartItems = getProductsFromLocalStorage();
    if (cartItems) {
      const newCartItems = [...cartItems, { id, price, thumbnail, title, qnt: 1 }];
      return setProductsFromLocalStorage(newCartItems);
    }
    const newCartItems = [{ id, price, thumbnail, title, qnt: 1 }];
    return setProductsFromLocalStorage(newCartItems);
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
      <>
        <header className="mainHeader">
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <ShoppingCart
              className="cartIcon"
              color="black"
              size={ 30 }
            />
          </Link>
        </header>
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
              <button
                type="button"
                onClick={ this.addToCart }
                data-testid="product-detail-add-to-cart"
              >
                Add to Cart
              </button>
            </div>
            <section className="productAttributes">
              {
                attributes
                  .filter(({ name, value_name: valueName }) => name && valueName)
                  .map(({ name, value_name: valueName, id }) => (
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
          {/* <div className='form'>
          <Form />
        </div> */}

        </section>
      </>
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
