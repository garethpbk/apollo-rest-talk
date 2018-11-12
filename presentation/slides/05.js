import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import { ModSlide, Header, WhiteCodePane } from './Base';

import reactLogo from '../assets/img/react-logo.svg';

const Logo = styled.img`
  width: 125px;

  margin: 0 50px;

  transition: all 1.5s;

  &:hover {
    transform: rotate3d(2, -1, -1, 360deg);
  }
`;

export default () => (
  <ModSlide bgColor="primary">
    <Header textColor="secondary" margin="25px 0">
      Raucous Recipes <Logo src={reactLogo} alt="React Logo" />
    </Header>
    <Text margin="50px 0" textColor="secondary" size={2}>
      <a href="http://raucous.gareth.cool/" target="_blank" rel="noreferrer noopener">
        https://raucous.gareth.cool/
      </a>
    </Text>
    <Text bold>Fetch All Recipes</Text>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/react-fetch-all.example')}
      fontSize="24px"
      spanPadding="2.5% 15%"
    />
  </ModSlide>
);
