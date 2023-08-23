import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';



const Search: FunctionComponent = () => {



    return (
        <SearchContainer>
        <Image></Image>
        <SearchText>
           <Text>List of {} Disney Characters with own Tv Shows</Text>
           <Title>The Best Animated Disney Characters <br/> of All Time</Title>
            <SearchBar placeholder="Search for a character..."></SearchBar>
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

const Image = styled.img`
    width: 1/3;
    height: fit-content;
    margin: 0 auto;
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