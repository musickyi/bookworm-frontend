import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'HANAMDAUM';
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/HANAMDAUM.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
  }


  body {
    font-family: 'HANAMDAUM';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #F1F1F5;
    font-size: 16px;
  }

`;
