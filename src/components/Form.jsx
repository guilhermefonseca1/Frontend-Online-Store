import PropTypes from 'prop-types';
import React from 'react';
import { getProductsEvaluationToLocalStorage,
  setProductsEvaluationToLocalStorage } from '../services/api';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      textDescription: '',
      email: '',
      nota: '0',

    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { id } = target;

    this.setState({
      [id]: value,
    });
  }

  handleClick = () => {
    const { id } = this.props;
    const { textDescription, email, nota } = this.state;
    const newEvaluation = {
      id,
      textDescription,
      email,
      nota,
    };
    const evaluations = getProductsEvaluationToLocalStorage();

    if (evaluations) {
      const newEvaluations = [...evaluations, newEvaluation];
      return setProductsEvaluationToLocalStorage(newEvaluations);
    }
    const newEvaluations = [newEvaluation];
    return setProductsEvaluationToLocalStorage(newEvaluations);
  }

  render() {
    const {
      textDescription,
      email,
      nota,
    } = this.state;

    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            data-testid="product-detail-email"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <select value={ nota } id="nota" onChange={ this.handleChange }>
          <option data-testid="1-rating" value="1">1</option>
          <option data-testid="2-rating" value="2">2</option>
          <option data-testid="3-rating" value="3">3</option>
          <option data-testid="4-rating" value="4">4</option>
          <option data-testid="5-rating" value="5">5</option>
        </select>

        <label htmlFor="textDescription">
          Descrição
          <textarea
            data-testid="product-detail-evaluation"
            id="textDescription"
            value={ textDescription }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="submit"
          data-testid="submit-review-btn"
          onClick={ this.handleClick }
        >
          Enviar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Form;
