import PropTypes from 'prop-types';
import React from 'react';
import { getProductsEvaluationToLocalStorage } from '../services/api';
import EvaluationCard from './EvaluationCard';

class Evaluations extends React.Component {
  constructor() {
    super();
    this.state = {
      evaluationsFilteredById: [],
    };
  }

  componentDidMount() {
    const evaluations = getProductsEvaluationToLocalStorage();
    const { id: idAtual } = this.props;
    if (evaluations) {
      const evaluationsFilteredById = evaluations.filter(({ id }) => id === idAtual);
      this.setState({
        evaluationsFilteredById,
      });
    }
  }

  render() {
    const { evaluationsFilteredById } = this.state;

    return (
      <section>
        {
          evaluationsFilteredById.length === 0
            ? <h1>Este produto ainda não possui nenhuma avaliação. </h1>
            : evaluationsFilteredById.map(({
              id,
              email,
              nota,
              textDescription,
            }) => (
              <EvaluationCard
                key={ id }
                email={ email }
                nota={ nota }
                textDescription={ textDescription }
              />))
        }
      </section>
    );
  }
}

Evaluations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Evaluations;
