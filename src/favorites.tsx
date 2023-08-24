import React, { FunctionComponent, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header, Hero, List, Footer } from "./components";
import { styled } from "styled-components";
import { getDisneyCharacters } from "./services/Api";

const favorites: FunctionComponent = () => {
  return (
    <Router>
      <Wrap>
        <Header />

        <List />
        <Footer />
      </Wrap>
    </Router>
  );
};

export default favorites;

const Wrap = styled.div`
  background-color: #f2f2f2;
`;
