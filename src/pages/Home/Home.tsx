import { Flex } from 'rebass/styled-components'

import { Button } from '~/components/Button'
import { Logo } from '~/components/Logo'
import { signIn } from '~/utils/signIn'

import { Main, SignInContainer } from './styles'

export function Home() {
  return (
    <Main alignItems="center" justifyContent="center">
      <SignInContainer>
        <Flex justifyContent="center" my="0.25rem">
          <Logo />
        </Flex>

        <Button onClick={() => signIn('google')}>Entrar com Google</Button>
        <Button onClick={() => signIn('github')}>Entrar com Github</Button>
      </SignInContainer>
    </Main>
  )
}
