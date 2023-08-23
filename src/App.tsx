import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Hero, List, Footer } from './components';
import { styled } from 'styled-components';
import { getDisneyCharacters } from './services/Api'; 

const App: FunctionComponent = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Router>
      <Wrap>
      <Header />
      <Hero />
      <List searchTerm={searchTerm} />
      <Footer />
      </Wrap>
    </Router>
  );
}

export default App;
 
const Wrap = styled.div`
 background-color: #f2f2f2;
 `