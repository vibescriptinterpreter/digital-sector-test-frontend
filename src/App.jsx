import React from 'react';
import { createGlobalStyle } from 'styled-components';
import LinksDashboard from './components/LinksDashboard';
import { LinksProvider } from './context/links';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-style: normal;
    font-family: 'Open Sans', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
`;

const App = () => (
  <LinksProvider>
    <LinksDashboard />
  </LinksProvider>
);

export default () => (
  <>
    <GlobalStyle />
    <App />
  </>
);
