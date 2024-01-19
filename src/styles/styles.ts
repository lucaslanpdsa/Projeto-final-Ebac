import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    a{
      color: inherit;
    }
  }

  .container{
    max-width: 1024px;
    margin: 0 auto;

    @media screen and (max-width: 1024px) {
      max-width: 95%;
  }
`

export default GlobalStyle