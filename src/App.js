import React from "react";
import { GlobalStyles } from "./global";
import SaloonList from "./components/List/SaloonList";
import Header from "./components/Header";
import GlobalFonts from "./fonts/fonts";
import styled from "styled-components";
import ListFilter from "./components/List/ListFilter";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  margin: 10px;
`;

function App() {
  return (
    <Container>
      <GlobalFonts />
      <Header />
      <ListFilter />
      <GlobalStyles />
      <SaloonList />
    </Container>
  );
}

export default App;
