import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import { ModSlide, Header, WhiteCodePane } from './Base';

export default () => (
  <ModSlide bgColor="primary">
    <Header textColor="secondary" margin="25px 0">
      Send a Mutation, 2/2
    </Header>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/react-graphql-send-mutation-2.example')}
      fontSize="24px"
      spanPadding="2.5% 10%"
    />
  </ModSlide>
);
