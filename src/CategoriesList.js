import React, { Component } from 'react';
import Category from './Category';
import oscarsJSON from '../api/oscars.json';

class CategoriesList extends Component {
  render() {
    const { categories } = oscarsJSON;
    return (
      <div>
        {categories.map((categoryProps, i) => (
          <Category {...this.props} categoryProps={categoryProps} key={i} index={i} />
        ))}
      </div>
    );
  }
}

export default CategoriesList;
