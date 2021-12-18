import type { DefaultTheme } from 'styled-components'

import { colors } from '../colors'
import { fonts, fontSizes, fontWeights, lineHeights } from '../fonts'

export const darkTheme: DefaultTheme = {
  title: 'dark',

  colors,

  fonts,
  fontSizes,
  fontWeights,
  lineHeights,

  global: {
    body: {
      bg: colors.gray[900],
      color: colors.gray[50]
    }
  }
}
