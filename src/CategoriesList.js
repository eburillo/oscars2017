import React, { Component } from "react";
import Category from "./Category";
import oscarsJSON from "../api/oscars.json";

class CategoriesList extends Component {
  render() {
    const { categories } = oscarsJSON;
    return (
      <div>
        {categories.map((category, i) => (
          <Category key={i} index={i} categoryProps={category} />
        ))}
      </div>
    );
  }
}

export default CategoriesList;
