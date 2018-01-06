import React, { Component } from 'react';
import Nominee from './Nominee.js';

class Category extends Component {
  render() {
    const { id, title, nominees, primary } = this.props.categoryProps;

    return (
      <div className="category-block">
        <h2 className="category-title">{title}</h2>
        <div className="category-nominees">
          {nominees.map((filmId, i) => (
            <Nominee
              {...this.props}
              id={filmId}
              categoryId={id}
              categoryTitle={title}
              primary={primary}
              key={`${title}-${i}`}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
