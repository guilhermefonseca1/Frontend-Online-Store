import PropTypes from 'prop-types';
import React from 'react';

class EvaluationCard extends React.Component {
  render() {
    const { email, nota, textDescription } = this.props;
    return (
      <div>
        <p>
          {email}
        </p>
        <p>
          {
            `Nota: ${nota} estrela(s)`
          }
        </p>
        <p>
          {
            `Avaliação: ${textDescription}`
          }
        </p>
      </div>
    );
  }
}

EvaluationCard.propTypes = {
  email: PropTypes.string.isRequired,
  nota: PropTypes.number.isRequired,
  textDescription: PropTypes.string.isRequired,
};

export default EvaluationCard;
