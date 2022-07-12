import PropTypes from 'prop-types';
import React from 'react';
import { getProductsEvaluationToLocalStorage } from '../services/api';
import EvaluationCard from './EvaluationCard';
import Form from './Form';

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

  addNewEvaluation = (newEval) => {
    this.setState(({ evaluationsFilteredById: prevEval }) => ({
      evaluationsFilteredById: [...(prevEval || []), newEval],
    }));
  }

  render() {
    const { evaluationsFilteredById } = this.state;
    const { id } = this.props;

    return (
      <>
        <div>
          <Form
            id={ id }
            addNewEvaluation={ this.addNewEvaluation }
          />
        </div>
        <section>
          {
            evaluationsFilteredById.length === 0
              ? <h1>Este produto ainda não possui nenhuma avaliação. </h1>
              : evaluationsFilteredById.map(({
                email,
                nota,
                textDescription,
              }, index) => (
                <EvaluationCard
                  key={ index }
                  email={ email }
                  nota={ nota }
                  textDescription={ textDescription }
                />))
          }
        </section>
      </>
    );
  }
}

Evaluations.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Evaluations;
