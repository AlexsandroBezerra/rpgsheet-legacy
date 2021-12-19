import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Button } from '~/components/Button'
import { Center } from '~/components/Center'
import { Logo } from '~/components/Logo'
import { useToast } from '~/hooks/useToast'
import { resolveSignInErrorsToToastData, signIn } from '~/utils/signIn'

import { SignInContainer } from './styles'

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
    <Center height="100vh">
      <SignInContainer as="main">
        <Center my="0.25rem">
          <Logo />
        </Center>

        <Button onClick={() => signIn('google')}>Entrar com Google</Button>
        <Button onClick={() => signIn('github')}>Entrar com Github</Button>
      </SignInContainer>
    </Center>
  )
}
