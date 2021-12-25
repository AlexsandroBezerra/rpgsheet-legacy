import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Text } from 'rebass/styled-components'

export const LogoContainer = styled(Text)`
  font-weight: bold;
  letter-spacing: -0.025em;
`

export const LogoDot = styled(Text)`
  margin-left: 0.25rem;
  color: ${theme('colors.primary')};
`
