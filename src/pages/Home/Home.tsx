import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Flex } from 'rebass/styled-components'

import { Button } from '~/components/Button'
import { Logo } from '~/components/Logo'
import { useToast } from '~/hooks/useToast'
import { resolveSignInErrorsToToastData, signIn } from '~/utils/signIn'

import { Main, SignInContainer } from './styles'

export function Home() {
  const { push, query } = useRouter()
  const { addToast } = useToast()

  useEffect(() => {
    if (query.error) {
      const toastData = resolveSignInErrorsToToastData(query.error as string)

      addToast(toastData)

      push('/', undefined, { shallow: true })
    }
  }, [query])

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
