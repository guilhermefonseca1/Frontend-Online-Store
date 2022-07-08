import React, { Component } from 'react';
import '../styles/ProductList.css';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-router-dom';
import ResultsContent from '../components/ResultsContent';
import Categories from '../components/Categories';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      results: [],
      searchStatus: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type !== 'text' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  getProducts = async () => {
    const { inputValue } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', inputValue);
    this.setState({
      results,
      searchStatus: true,
    });
  }

  render() {
    const { inputValue, results, searchStatus } = this.state;
    return (
      <section className="wrapper">
        <header>
          <input
            name="inputValue"
            type="text"
            placeholder="Digite sua busca"
            value={ inputValue }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          <button
            type="submit"
            onClick={ this.getProducts }
            data-testid="query-button"
          >
            Pesquisar
          </button>
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
        <div className="content">
          <Categories />
          <ResultsContent
            results={ results }
            searchStatus={ searchStatus }
          />
        </div>
      </section>
    );
  }
}
