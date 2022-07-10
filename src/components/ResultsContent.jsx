import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../styles/ResultsContent.css';
import Product from './Product';

export default class ResultsContent extends Component {
  render() {
    const { results, searchStatus } = this.props;
    if (!searchStatus) {
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

    return (
      <div className="ResultsContent">
        {
          results.length === 0
            ? <p>Nenhum produto foi encontrado</p>
            : (
              <div className="inner-content">
                {
                  results.map(({ id, price, thumbnail, title }) => (<Product
                    key={ id }
                    id={ id }
                    price={ price }
                    thumbnail={ thumbnail }
                    title={ title }
                  />))
                }
              </div>)
        }
      </div>
    );
  }
}

ResultsContent.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchStatus: PropTypes.bool.isRequired,
};
