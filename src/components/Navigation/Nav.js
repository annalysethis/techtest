import React, { Component } from "react";
import { Arrow, Arrow2, BackBtn, Container } from "./Nav.styled";

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

export default Nav;
