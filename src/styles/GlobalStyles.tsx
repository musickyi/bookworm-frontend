import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'HANAMDAUM';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/HANAMDAUM.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}

*{
    padding:0;
    margin:0;
}
body{
   font-family:'HANAMDAUM';
}




`;