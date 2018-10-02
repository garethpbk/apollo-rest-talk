import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';
import { ModSlide, WhiteCodePane } from './Base';

export default () => (
  <ModSlide bgColor="primary">
    <WhiteCodePane
      lang="javascript"
      source={require('raw-loader!../code/vue-graphql-2.example')}
      fontSize="18px"
      spanPadding="2.5% 10%"
    />
  </ModSlide>
);
