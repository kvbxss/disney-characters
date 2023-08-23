import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getDisneyCharacters } from '../services/Api';

const Hero: FunctionComponent = () => {
  return (
    <HeroContainer>
        <TextWrapper>
            <Text>
                Most popular Disney characters
            </Text>
        </TextWrapper>
        <CardWrapper>
            <Card>
                <CardImage />
                <CardText>
                    <CardTitle>

                    </CardTitle>
                    <Star></Star>
                    <CardSubtitle>

                    </CardSubtitle>
                </CardText>
            </Card>
            <Card>
                <CardImage />
                <CardText>
                    <CardTitle>

                    </CardTitle>
                    <Star></Star>
                    <CardSubtitle>

                    </CardSubtitle>
                </CardText>
            </Card>
            <Card>
                <CardImage />
                <CardText>
                    <CardTitle>

                    </CardTitle>
                    <Star></Star>
                    <CardSubtitle>

                    </CardSubtitle>
                </CardText>
            </Card>
        </CardWrapper>
    </HeroContainer>
  )
}

export default Hero;

const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: #f2f2f2;
    `

const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
const Text = styled.h1`
    font-size: 60px;
    font-family: "Mukta", sans-serif;
    color: #011936;
    font-weight: 500;
`
const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    `
const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 400px;
    width: 300px;
    background-color: #011936;
    border-radius: 10px;
    margin: 20px;
    `
const CardImage = styled.div`
    height: 250px;
    width: 300px;
    background-color: #273f5c;
    border-radius: 10px 10px 0px 0px;
    `
const CardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `
const CardTitle = styled.h2`
    font-size: 30px;
    font-family: "Mukta", sans-serif;
    color: #ed254e;
    font-weight: 500;
    text-decoration: none;
    `
const CardSubtitle = styled.h3`
    font-size: 20px;
    font-family: "Mukta", sans-serif;
    color: #ed254e;
    font-weight: 500;
    text-decoration: none;
    `
const Star = styled.div`
    height: 20px;
    width: 20px;
    background-color: #ed254e;
    border-radius: 50%;
    `

