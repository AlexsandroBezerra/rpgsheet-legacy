import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'
import { theme } from 'styled-tools'

export const Main = styled(Flex)`
  align-item: center;
  justift-content: center;

  height: 100vh;
  width: 100vw;
`

export const SignInContainer = styled(Flex)`
  border-radius: 0.5rem;
  width: 95%;
  max-width: 22.5rem;

  gap: 1rem;
  flex-direction: column;

  padding: 2rem;
  background: ${theme('colors.gray.800')};
`
