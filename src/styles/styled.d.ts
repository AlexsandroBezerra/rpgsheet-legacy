import 'styled-components'

export interface Typography<T = string> {
  body: T
  heading: T
}

export type ColorVariants = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type ColorRecord = Record<ColorVariants, string>

export interface Colors {
  primary: string
  primaryHover: string

  white: string
  black: string

  red: ColorRecord
  green: ColorRecord
  blue: ColorRecord
  gray: ColorRecord
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

export type ToastVariants = 'default' | 'success' | 'error'

export interface ToastVariant {
  background: string
  color: string
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

    toast: Record<ToastVariants, ToastVariant>
  }
}
