import Head from 'next/head'
import { signIn } from 'next-auth/react'
import { Button, Center, Flex, Stack } from '@chakra-ui/react'
import { Logo } from '~/components/logo'

function Home() {
  return (
    <>
      <Head>
        <title>rpgsheet</title>
      </Head>

      <Center w="100vw" h="100vh">
        <Stack w="100%" maxWidth={360} bg="gray.800" p="2rem" borderRadius="0.5rem" spacing="1rem">
          <Flex justify="center">
            <Logo />
          </Flex>

          <Button type="button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
            Entrar com o Github
          </Button>

          <Button type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
            Entrar com o Google
          </Button>
        </Stack>
      </Center>
    </>
  )
}

export default Home
