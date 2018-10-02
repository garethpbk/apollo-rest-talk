import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import { ModSlide, Header, WhiteCodePane } from './Base';

export default () => (
  <ModSlide bgColor="primary" margin="25px 0">
    <Header textColor="secondary">Send a Mutation, 1/2</Header>
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/react-graphql-send-mutation.example')}
      fontSize="18px"
      spanPadding="2.5% 12%"
    />
  </ModSlide>
);
