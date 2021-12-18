import 'styled-components'

export interface Typography<T = string> {
  body: T
  heading: T
}

export interface Colors {
  primary: string
  primaryHover: string

  white: string
  black: string

  gray: {
    900: string
    800: string
    700: string
    600: string
    500: string
    400: string
    300: string
    200: string
    100: string
    50: string
  }
}

export interface FontSizes extends Typography {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
  '7xl': string
  '8xl': string
  '9xl': string

  0: number
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  7: number
  8: number
}

export interface GlobalStyle {
  body: {
    bg: string
    color: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: Colors
    fontSizes: FontSizes
    global: GlobalStyle

    fonts: Typography
    lineHeights: Typography
    fontWeights: Typography<number>
  }
}
