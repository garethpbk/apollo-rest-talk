import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import { ModSlide, Header, WhiteCodePane } from './Base';

import vueLogo from '../assets/img/vue-logo.svg';

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
      Vivacious Viands <Logo src={vueLogo} alt="Vue Logo" />
    </Header>
    <Text margin="50px 0" textColor="secondary" size={2}>
      <a href="http://vivacious.gareth.cool/" target="_blank" rel="noreferrer noopener">
        https://vivacious.gareth.cool/
      </a>
    </Text>
    <Text bold>vue-apollo</Text>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/vue-graphql.example')}
      fontSize="24px"
      spanPadding="2.5% 20%"
    />
  </ModSlide>
);
