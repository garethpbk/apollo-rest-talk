import React from 'react';
import styled from 'styled-components';
import { Slide, Text } from 'spectacle';
import { Header } from './Base';

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
  <Slide bgColor="primary">
    <Header textColor="secondary" fontSize="5rem" margin="150px 0">
      THANK YOU
    </Header>
    <Content textColor="secondary">
      <a href="https://github.com/garethpbk/apollo-rest-talk" target="_blank" rel="noopener noreferrer">
        https://github.com/garethpbk/apollo-rest-talk
      </a>
    </Content>
    <Text bold margin="150px 0 150px 0">
      @garethbk
    </Text>
  </Slide>
);
