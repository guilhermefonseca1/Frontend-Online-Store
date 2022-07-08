import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCategories } from '../services/api';
import '../styles/Categories.css';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="Categories">
        { categories.map(({ name, id }) => (
          <label
            htmlFor={ id }
            key={ id }
            data-testid="category"
          >
            <input
              name="categoryValue"
              type="radio"
              id={ id }
              onChange={ handleChange }
            />
            <p>{ name }</p>
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
