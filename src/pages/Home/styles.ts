import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'
import { theme } from 'styled-tools'

export const SignInContainer = styled(Flex)`
  border-radius: 0.5rem;
  width: 100%;
  max-width: 22.5rem;
  margin: 0 1rem;

  gap: 1rem;
  flex-direction: column;

  padding: 2rem;
  background: ${theme('colors.gray.800')};
`
