import React, { Component } from 'react';
import '../styles/ResultsContent.css';

export default class ResultsContent extends Component {
  render() {
    return (
      <div className="ResultsContent">
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
