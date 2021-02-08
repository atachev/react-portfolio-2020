import * as React from "react";
import * as ReactDOM from "react-dom";
import { GlobalStyle } from './styles/global';
import App from "./App";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/index';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
};

ReactDOM.render(<Root />, document.getElementById("root"));