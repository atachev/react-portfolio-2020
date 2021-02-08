import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
        min-height: 100%;
    }
    body {
        padding: 0;
        margin: 0;
        font-family: "Roboto Condensed", sans-serif;
    }
    #root {
        height: 100%;
    }
`;