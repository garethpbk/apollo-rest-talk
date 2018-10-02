import React from 'react';
import styled from 'styled-components';
import { Slide, Text, Code } from 'spectacle';
import { ModSlide, Header } from './Base';

import apolloLogo from '../assets/img/apollo-logo.svg';

const Content = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 125px;

  margin: 0 50px;

  transition: all 1.5s;

  &:hover {
    transform: rotate3d(-3, 1, 2, -360deg);
  }
`;

export default () => (
  <ModSlide transition={['zoom']} bgColor="primary">
    <Header textColor="secondary" margin="25px 0">
      Apollo
      <Logo src={apolloLogo} alt="Apollo Logo" />
    </Header>
    <Text textColor="secondary" margin="0 0 50px 0">
      A set of tools for working with GraphQL
    </Text>
    <Text margin="0 0 75px 0">
      <strong>Apollo Client</strong>, Apollo Server, Apollo Engine
    </Text>
    <Code>
      apollo-client, apollo-cache-inmemory, apollo-link, apollo-link-rest, graphql, graphql-anywhere, graphql-tag,
      react-apollo
    </Code>
    <Text margin="50px 0 0 0">
      <strong>apollo-link-rest</strong>
    </Text>
  </ModSlide>
);
