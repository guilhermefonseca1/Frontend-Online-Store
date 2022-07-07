import React, { Component } from 'react';
import '../styles/ProductList.css';
import ResultsContent from '../components/ResultsContent';

export default class ProductList extends Component {
  render() {
    return (
      <section className="ProductList">
        <header>
          <input
            type="text"
            placeholder="Digite sua busca"
          />
          <button type="submit">Pesquisar</button>
        </header>
        <ResultsContent />
      </section>
    );
  }
}
