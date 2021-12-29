import type { Typography, FontSizes, LineHeights } from './styled'

export const fontSizes: FontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',

  body: '1rem',
  heading: '2rem',

  0: 12,
  1: 14,
  2: 16,
  3: 20,
  4: 24,
  5: 32,
  6: 48,
  7: 64,
  8: 96
}

export const fonts: Typography = {
  body: "'Roboto', sans-serif",
  heading: "'Roboto', sans-serif"
}

export const fontWeights: Typography<number> = {
  body: 400,
  heading: 700
}

export const lineHeights: LineHeights = {
  body: 1.5,
  heading: 1.25,

  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  3: '.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem'
}
