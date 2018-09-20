import React from 'react';
import styled from 'styled-components';
import { Slide, Text } from 'spectacle';

import apolloLogo from '../assets/img/apollo-logo.svg';
import graphqlLogo from '../assets/img/graphql-logo.svg';
import reactLogo from '../assets/img/react-logo.svg';

const Header = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
`;

const Second = styled(Text)`
  font-size: 40px !important;
`;

const Svg = styled.img`
  margin: 50px 50px 0 50px;
  width: 200px;

  transition: all 1.5s;

  &:hover {
    transform: rotate(360deg);
  }
`;

const SmallText = styled(Text)`
  font-size: 2rem !important;
`;

export default () => (
  <Slide bgColor="primary">
    <Header textColor="secondary">Try GraphQL with Apollo Client</Header>
    <Second margin="50px 0" textColor="tertiary" bold>
      Use GraphQL with your existing REST APIs
    </Second>
    <Svg src={apolloLogo} alt="Apollo Logo" />
    <Svg src={graphqlLogo} alt="GraphQL Logo" />
    <Svg src={reactLogo} alt="React Logo" />
    <SmallText margin="50px 0" textColor="secondary">
      October 2, 2018
    </SmallText>
  </Slide>
);
