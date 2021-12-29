import { Box } from 'rebass/styled-components'

import { useBreakpoints } from '~/hooks/useBreakpoints'
import { Logo } from '../Logo'
import { Profile } from '../Profile'

import { Container } from './styles'

export function Header() {
  const { isGreaterThanSmall } = useBreakpoints()

  return (
    <Container as="header">
      <Logo />

      <Box ml="auto">
        <Profile showProfileData={isGreaterThanSmall} />
      </Box>
    </Container>
  )
}
