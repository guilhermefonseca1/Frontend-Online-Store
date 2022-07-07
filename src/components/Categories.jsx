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
    return (
      <div className="Categories">
        { categories.map(({ name, id }) => (
          <label
            htmlFor={ id }
            key={ id }
            data-testid="category"
          >
            <input
              name="categories"
              type="radio"
              id={ id }
            />
            <p>{ name }</p>
          </label>
        ))}
      </div>
    );
  }
}
