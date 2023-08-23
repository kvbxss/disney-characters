import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header: FunctionComponent = () => {
    return (
        <Head>
            <TitleWrapper>
                <Title to='/'>Disney</Title>
                <Subtitle to='/favorites'>My Favorites</Subtitle>
            </TitleWrapper>
        </Head>
    );
}

export default Header;

const Head = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled(Link)`
    font-size: 130px;
    font-family: "Mukta", sans-serif;
    color: #ed254e;
    font-weight: 500;
    text-decoration: none;
    
    &:hover {
        color: #e3627c;
        scale: 1.1;
        transition: 0.5s ease-out;
    }
    `
const Subtitle = styled(Link)`
    font-size: 40px;
    font-family: "Mukta", sans-serif;
    color: #011936;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        color: #273f5c;
        scale: 1.1;
        transition: 0.5s ease-out;
    }

`
