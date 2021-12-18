import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Button } from 'rebass/styled-components'

export const ButtonContainer = styled(Button)`
  font-weight: 600;
  line-height: 1.2;
  height: 2.5rem;

  :hover {
    background: ${theme('colors.primaryHover')};
  }
`
