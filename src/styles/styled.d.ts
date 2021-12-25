import 'styled-components'

export type Typography<T = string> = {
  body: T
  heading: T
}

export type LineHeights = Typography & {
  normal: string | number
  none: string | number
  shorter: string | number
  short: string | number
  base: string | number
  tall: string | number
  taller: string | number
  3: string | number
  4: string | number
  5: string | number
  6: string | number
  7: string | number
  8: string | number
  9: string | number
  10: string | number
}

export type ColorVariants = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type ColorRecord = Record<ColorVariants, string>

export type Colors = {
  primary: string
  primaryHover: string

  white: string
  black: string

  red: ColorRecord
  green: ColorRecord
  blue: ColorRecord
  gray: ColorRecord
}

export type FontSizes = Typography & {
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

export type GlobalStyle = {
  body: {
    bg: string
    color: string
  }
}

export type ToastVariants = 'default' | 'success' | 'error'

export type ToastVariant = {
  background: string
  color: string
}

declare module 'styled-components' {
  export type DefaultTheme = {
    title: string
    colors: Colors
    fontSizes: FontSizes
    global: GlobalStyle
    breakpoints: string[]

    fonts: Typography
    lineHeights: Typography
    fontWeights: Typography<number>

    toast: Record<ToastVariants, ToastVariant>
  }
}
