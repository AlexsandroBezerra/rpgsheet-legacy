import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Heading, Text } from 'rebass/styled-components'

export const LogoContainer = styled(Heading)`
  font-weight: bold;
  letter-spacing: -0.025em;
  font-size: ${theme('fontSizes.3xl')};
`

export const LogoDot = styled(Text)`
  margin-left: 0.25rem;
  color: ${theme('colors.primary')};
`
