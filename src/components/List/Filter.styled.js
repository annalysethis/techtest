import styled from "styled-components";

export const FilterContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #d3b23b;
  border-top: 1px solid #d3b23b;
  width: 100%;
  height: 50px;

  select {
    padding-left: 15px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: "";
  }
`;

export const ArrowBox = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: -1;
`;
