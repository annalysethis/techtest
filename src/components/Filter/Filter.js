import React, { Component } from "react";
import { FilterContainer, ArrowBox } from "./Filter.styled";

export class Filter extends Component {
  render() {
    return (
      <FilterContainer>
        <p>Pris 250 - 500</p>
        <ArrowBox>
          <i className="fas fa-chevron-down"></i>
        </ArrowBox>
      </FilterContainer>
    );
  }
}

export default Filter;
