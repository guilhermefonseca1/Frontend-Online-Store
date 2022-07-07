import React, { Component } from 'react';
import '../styles/ProductList.css';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import ResultsContent from '../components/ResultsContent';

export default class ProductList extends Component {
  render() {
    return (
      <section className="wrapper">
        <header>
          <input
            type="text"
            placeholder="Digite sua busca"
          />
          <button type="submit">Pesquisar</button>
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
        <ResultsContent />
      </section>
    );
  }
}
