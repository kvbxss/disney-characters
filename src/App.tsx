import React, { FunctionComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Hero, List, Footer } from "./components";
import { styled } from "styled-components";

const App: FunctionComponent = () => {
  return (
    <Router>
      <Wrap>
        <Header />
        <Hero />
        <List />
        <Footer />
      </Wrap>
    </Router>
  );
};

export default App;

const Wrap = styled.div`
  background-color: #f2f2f2;
`;
