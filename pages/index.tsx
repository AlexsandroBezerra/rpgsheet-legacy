import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'

function Home() {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>rpgsheet</title>
      </Head>

      <Stack spacing="1rem">
        <Heading>rpgsheet</Heading>

        <Box>
          <Button type="button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
            Sign in with github
          </Button>
        </Box>

        <Box>
          <Button type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
            Sign in with google
          </Button>
        </Box>
      </Stack>

      <Text>{query.error && 'Erro ao fazer login'}</Text>
    </>
  )
}

export default Home
