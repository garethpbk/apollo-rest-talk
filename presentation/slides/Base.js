import { Slide, CodePane } from 'spectacle';
import styled from 'styled-components';

export const ModSlide = styled(Slide)`
  max-height: 100vh !important;

  overflow-y: scroll;

  a {
    color: cornflowerblue;
    text-decoration: none;

    &:hover {
      color: seagreen;
      text-decoration: underline;
    }
  }
`;

export const Header = styled.h1`
  font-size: 4.5rem;

  margin: ${props => props.margin};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WhiteCodePane = styled(CodePane)`
  color: white !important;
  font-size: ${props => props.fontSize} !important;

  pre {
    padding: ${props => props.spanPadding} !important;
    span {
      color: cornflowerblue !important;
    }
  }
`;
