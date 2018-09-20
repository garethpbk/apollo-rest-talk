import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import 'prismjs/components/prism-graphql';

import graphqlLogo from '../assets/img/graphql-logo.svg';

const ModSlide = styled(Slide)`
  max-height: none !important;
`;

const Header = styled.h1`
  font-size: 5rem;

  margin: 25px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 125px;

  margin: 0 50px;

  transition: all 1.5s;

  &:hover {
    transform: rotate3d(2, -1, -1, 360deg);
  }
`;

const WhiteCodePane = styled(CodePane)`
  color: white !important;
  font-size: 24px;

  pre {
    padding: 2.5% 25% !important;
    span {
      color: cornflowerblue !important;
    }
  }
`;

export default () => (
  <ModSlide transition={['zoom']} bgColor="primary">
    <Header textColor="secondary">
      GraphQL
      <Logo src={graphqlLogo} alt="GraphQL Logo" />
    </Header>
    <Text textColor="secondary" margin="0 0 25px 0">
      A strongly-typed, declarative query language for fetching and posting data
    </Text>
    <WhiteCodePane
      lang="graphql"
      source={require('raw-loader!../code/graphql-query.example')}
      style={{ fontSize: '24px' }}
    />
  </ModSlide>
);
