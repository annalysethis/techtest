import React from "react";
import { GlobalStyles } from "./global";
import SaloonList from "./components/List/SaloonList";
import GlobalFonts from "./fonts/fonts";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  width: 100vw;
  /*  height: 100%;
  align-items: center;
  display: flex; */
  min-height: 100vh;
  /*   justify-content: center; */
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <GlobalFonts />
      <SaloonList />
    </Container>
  );
}

export default App;
