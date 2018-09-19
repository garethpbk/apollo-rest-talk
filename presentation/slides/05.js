import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';

import reactLogo from '../assets/img/react-logo.svg';

const ModSlide = styled(Slide)`
  max-height: none !important;

  a {
    text-decoration: none !important;
  }
`;

const Header = styled.h1`
  font-size: 4.5rem;

  margin: 25px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 125px;

  margin: 0 50px;

  transition: all 1.5s;

  &:hover {
    transform: rotate3d(2, -1, -1, 360deg);
  }
`;

const CodeContainer = styled.div`
  display: flex;

  width: 100%;
`;

const WhiteCodePane = styled(CodePane)`
  color: white !important;
  font-size: 18px !important;

  pre {
    padding: 2.5% 20% !important;
    span {
      color: cornflowerblue !important;
    }
  }
`;

export default () => (
  <ModSlide bgColor="primary">
    <Header textColor="secondary">
      Raucous Recipes <Logo src={reactLogo} alt="React Logo" />
    </Header>
    <Text margin="50px 0" textColor="secondary" size={2}>
      <a
        href="https://raucous.gareth.cool/"
        target="_blank"
        rel="noreferrer noopener"
      >
        https://raucous.gareth.cool/
      </a>
    </Text>
    <Text bold>Fetch All Recipes</Text>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/react-fetch.example')}
    />
  </ModSlide>
);
