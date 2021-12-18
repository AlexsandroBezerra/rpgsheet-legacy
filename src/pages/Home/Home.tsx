import { Button } from '~/components/Button'
import { signIn } from '~/utils/signIn'

import { Main, SignInContainer } from './styles'

export function Home() {
  return (
    <Main alignItems="center" justifyContent="center">
      <SignInContainer>
        <Button onClick={() => signIn('google')}>Entrar com Google</Button>
        <Button onClick={() => signIn('github')}>Entrar com Github</Button>
      </SignInContainer>
    </Main>
  )
}
