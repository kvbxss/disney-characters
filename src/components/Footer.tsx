import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Footer: FunctionComponent = () => {
  return (
    <Foot>
        <Text>
            We are Disney fans and we adore the concept of Open Source 💗
        </Text>
        <Github onClick={
            () => window.open('https://github.com/kvbxss/disney-characters', '_blank')}>
            Go to GitHub
        </Github>
        <Text>
            Made with 💗 by <br/>
            <MyLink to="jakubdownarowicz.pl">
                Jakub Downarowicz
            </MyLink>
        </Text>
    </Foot>
  )
}

export default Footer

const Foot = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #011936;
    height: 400px;
    width: 100;
    padding: 40px;
    border-radius: 10px;
    margin-left: 200px;
    margin-right: 200px;
    `

const Text = styled.p`
    font-size: 20px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    line-height: 1.5;
    margin: 40px;
    text-align: center;
    text-decoration: none;

    `
const Github = styled.button`
    font-size: 20px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    line-height: 1.5;
    margin: 40px;
    text-align: center;
    border-radius: 10px;
    background-color: #ed254e;
    padding: 10px;
    &:hover {
        color: #f2f2f2;
        background-color: #011936;
        transition: 0.5s ease-out;
        box-shadow: 0px 0px 10px 0px #ed254e;
    }
    `

const MyLink = styled(Link)`
    font-size: 20px;
    font-family: "Mukta", sans-serif;
    color: #f2f2f2;
    line-height: 1.5;
    margin: 40px;
    text-align: center;
    text-decoration: none;

    &:hover {
        color: #ed254e;
        scale: 1.1;
        transition: 0.5s ease-out;
    }
`

