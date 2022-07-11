import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            data-testid="product-detail-email"
          />
        </label>

      </form>
    );
  }
}

export default Form;
