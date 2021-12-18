import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { Button, Heading, Text } from 'rebass/styled-components'

function Home() {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>rpgsheet</title>
      </Head>

      <Heading as="h1">rpgsheet</Heading>

      <Button type="button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
        Sign in with github
      </Button>

      <Button type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
        Sign in with google
      </Button>

      <Text>{query.error && 'Erro ao fazer login'}</Text>
    </>
  )
}

export default Home
