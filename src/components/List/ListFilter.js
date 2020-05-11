import React, { Component } from "react";
import ListData from "../data/saloons.json";
import { FilterContainer } from "./List.styled";

export class ListFilter extends Component {
  render() {
    return (
      <FilterContainer>
        <h3>Filter</h3>
      </FilterContainer>
    );
  }
}

export default ListFilter;
