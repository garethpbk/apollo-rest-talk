import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';

import mlabLogo from '../assets/img/mlab-logo.svg';

const ModSlide = styled(Slide)`
  max-height: none !important;
`;

const Header = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;

  margin: 0 25px;
`;

const Svg = styled.img`
  width: 150px;
  margin: 5px 50px;
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
    <Header textColor="secondary">Recipe REST API</Header>
    <Text margin="50px 0" textColor="secondary" size={2}>
      A simple Express CRUD API with one MongoDB schema.
    </Text>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/recipe-api.example')}
      style={{ fontSize: '24px' }}
    />
    <Svg src={mlabLogo} alt="mLab Logo" />
  </ModSlide>
);
