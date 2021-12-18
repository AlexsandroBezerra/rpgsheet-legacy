import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Button } from 'rebass/styled-components'

export const ButtonContainer = styled(Button)`
  font-weight: 600;

  :hover {
    background: ${theme('colors.primaryHover')};
  }
`
