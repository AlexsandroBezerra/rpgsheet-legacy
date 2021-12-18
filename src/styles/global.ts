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
    background: ${theme('global.body.bg')};
    color: ${theme('global.body.color')};
  }

  a, button {
    transition: all .3s ease-in-out;
  }

  button {
    cursor: pointer;
  }
`
