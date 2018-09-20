import React from 'react';
import styled from 'styled-components';
import { Slide, Text, CodePane } from 'spectacle';

const ModSlide = styled(Slide)`
  max-height: none !important;

  a {
    text-decoration: none !important;
  }
`;

const Header = styled.h1`
  font-size: 4.5rem;

  margin: 25px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CodeContainer = styled.div`
  display: flex;

  width: 100%;
`;

const WhiteCodePane = styled(CodePane)`
  color: white !important;
  font-size: 22px !important;

  pre {
    padding: 2.5% 15% !important;
    span {
      color: cornflowerblue !important;
    }
  }
`;

export default () => (
  <ModSlide bgColor="primary">
    <Header textColor="secondary">Render One Recipe</Header>
    <WhiteCodePane lang="javascript" source={require('raw-loader!../code/react-graphql-render-indv.example')} />
  </ModSlide>
);
