import styled from 'styled-components'
import { Flex } from 'rebass/styled-components'
import { theme } from 'styled-tools'

export const SignInContainer = styled(Flex)`
  gap: 1rem;
  flex-direction: column;

  background: ${theme('colors.gray.800')};

  width: 100%;
  max-width: 22.5rem;
  border-radius: 0.5rem;
  margin: 0 1rem;
  padding: 2rem;
`
