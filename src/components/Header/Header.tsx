import { Box } from 'rebass/styled-components'

import { Logo } from '../Logo'
import { Profile } from '../Profile'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <Logo />

      <Box ml="auto">
        <Profile name="Alexsandro G Bezerra" src="https://github.com/AlexsandroBezerra.png" />
      </Box>
    </Container>
  )
}
