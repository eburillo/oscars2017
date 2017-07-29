import React, { Component } from "react";
import Nominee from "./Nominee.js";

class Category extends Component {
  render() {
    const { title, primary, nominees } = this.props.categoryProps;

    return (
      <div className="category-block">
        <h2 className="category-title">{title}</h2>
        <div className="category-nominees">
          {nominees.map((filmId, i) => (
            <Nominee
              key={`${title}-${i}`}
              id={filmId}
              primary={primary}
              categoryTitle={title}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Category;
