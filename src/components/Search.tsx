import React, { ChangeEvent, FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

interface SearchProps {
    handleSearch: (searchTerm: string) => void;
  }



const Search: FunctionComponent<SearchProps> = ({ handleSearch }) => {
 
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setSearchTerm(value);
      handleSearch(value);
    };

    return (
        <SearchContainer>
        
        <ImageWrapper>
        <Image src='https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80' alt="Disneyland"></Image>
        </ImageWrapper>
        <SearchText>
           <Text>List of 100 Disney Characters with own Tv Shows</Text>
           <Title>The Best Animated Disney Characters <br/> of All Time</Title>
            <SearchBar placeholder="Search for a character..." value={searchTerm}
          onChange={handleInputChange}></SearchBar>
        </SearchText>
    </SearchContainer>
    );
}

export default Search;

const SearchContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex-direction: row;
    background-color: #011936;;
`

const ImageWrapper = styled.div`
    width: 400px;
    height: 400px;
    object-fit: cover;
    margin: 40px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
`    

const SearchText = styled.div`
    height: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    word-wrap: normal;
`

const Text = styled.p`
    font-size: 20px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    line-height: 1.5;
`

const Title = styled.h1`
    font-size: 40px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    line-height: 1.5;
`

const SearchBar = styled.input`
    width: 80%;
    height: 50px;
    border-radius: 10px;
    border: none;
    margin: 20px;
    padding: 10px;
    font-size: 20px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    background-color: #273f5c;
    outline: none;
`