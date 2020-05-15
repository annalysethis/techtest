import React, { Component } from "react";
import {
  Arrow,
  Arrow2,
  BackBtn,
  Container,
  FixedContainer,
  Arrow3,
  Arrow4,
} from "./Nav.styled";

const Nav = (props) => {
  return (
    <Container>
      <BackBtn onClick={() => props.selectSaloon()}>
        <Arrow> / </Arrow>
        <Arrow2> \ </Arrow2>
      </BackBtn>
    </Container>
  );
};

export const FloatingNav = (props) => (
  <FixedContainer>
    <BackBtn onClick={() => props.selectSaloon()}>
      <Arrow3> / </Arrow3>
      <Arrow4> \ </Arrow4>
    </BackBtn>
  </FixedContainer>
);
export default Nav;
