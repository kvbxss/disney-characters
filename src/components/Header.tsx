import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Header: FunctionComponent = () => {
  return (
    <Head>
      <TitleWrapper>
        <Title>Disney</Title>
      </TitleWrapper>
    </Head>
  );
};

export default Header;

const Head = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
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
`;
