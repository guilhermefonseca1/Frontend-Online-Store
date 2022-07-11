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
      searchQuery: '',
      prevCategoryValue: '',
      categoryValue: '',
      results: [],
      searchStatus: false,
    };
  }

  componentDidUpdate() {
    const { categoryValue, prevCategoryValue } = this.state;
    // String vazia retorna falso.
    if (categoryValue && categoryValue !== prevCategoryValue) {
      this.getProductsByCategory();
    }
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type !== 'text' ? target.id : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { inputValue } = this.state;
    this.setState({
      searchQuery: inputValue,
    }, () => {
      this.getProducts();
    });
  }

  getProductsByCategory = () => {
    this.getProducts();
    const { categoryValue } = this.state;
    this.setState({
      prevCategoryValue: categoryValue,
    });
  }

  getProducts = async () => {
    const { categoryValue, searchQuery } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(
      categoryValue,
      searchQuery,
    );
    this.setState({
      results,
      searchStatus: true,
      searchQuery: '',
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
            onClick={ this.handleClick }
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
          <Categories
            handleChange={ this.handleChange }
          />
          <ResultsContent
            results={ results }
            searchStatus={ searchStatus }
          />
        </div>
      </section>
    );
  }
}
