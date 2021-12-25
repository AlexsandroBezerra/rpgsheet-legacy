import { createGlobalStyle } from 'styled-components'
import { theme } from 'styled-tools'

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    text-size-adjust: none;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${theme('global.body.bg')};
    color: ${theme('global.body.color')};
  }

  a, button {
    transition: all .3s ease-in-out;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 48em) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 30em) {
    html {
      font-size: 87.5%;
    }
  }
`
