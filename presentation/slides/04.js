import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import { ModSlide, Header, WhiteCodePane } from './Base';

import mlabLogo from '../assets/img/mlab-logo.svg';

const Svg = styled.img`
  width: 150px;
  margin: 5px 50px;
`;

export default () => (
  <ModSlide bgColor="primary">
    <Header textColor="secondary" margin="0 25px">
      Recipe REST API
    </Header>
    <Text margin="50px 0" textColor="secondary" size={2}>
      A simple Express CRUD API with one MongoDB schema.
    </Text>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/recipe-api.example')}
      fontSize="20px"
      spanPadding="2.5% 20%"
    />
    <Svg src={mlabLogo} alt="mLab Logo" />
  </ModSlide>
);
