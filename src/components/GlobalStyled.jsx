import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body{
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 400;
  
  ::-webkit-scrollbar {
  display: none;
}
}

 html {
    scroll-behavior: smooth;
  }
a {
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    color:inherit;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin-top: 0;
    margin-bottom: 0;
}
img {
    display: block;
    max-width: 100%;
}
`;
