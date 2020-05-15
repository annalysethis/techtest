import React from "react";
import { GlobalStyles } from "./global";
import SaloonList from "./components/List/SaloonList";
import GlobalFonts from "./fonts/fonts";
import styled from "styled-components";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SaloonView from "./components/SaloonView/SaloonView";
import Filter from "./components/Filter/Filter";

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
    <Router>
      <Container>
        <GlobalStyles />
        <GlobalFonts />
        <SaloonList />
        {/* <Filter /> */}
        <Switch>
          <Route path="/saloonView" exact component={SaloonView} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
