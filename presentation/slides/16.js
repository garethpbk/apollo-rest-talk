import React from 'react';
import styled from 'styled-components';
import { Slide, Text } from 'spectacle';

const ModSlide = styled(Slide)`
  max-height: none !important;
`;

const Header = styled.h1`
  font-size: 5rem;

  margin: 150px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled(Text)`
  a {
    display: block;

    color: cornflowerblue;
    font-size: 38px;
    font-weight: 600;
    text-decoration: none;

    margin: 150px 0;

    &:hover {
      color: seagreen;
      text-decoration: underline;
    }
  }
`;

export default () => (
  <ModSlide bgColor="primary">
    <Header textColor="secondary">THANK YOU</Header>
    <Content textColor="secondary">
      <a href="https://github.com/garethpbk/apollo-rest-talk" target="_blank" rel="noopener noreferrer">
        https://github.com/garethpbk/apollo-rest-talk
      </a>
    </Content>
    <Text bold margin="150px 0 150px 0">
      @garethbk
    </Text>
  </ModSlide>
);
