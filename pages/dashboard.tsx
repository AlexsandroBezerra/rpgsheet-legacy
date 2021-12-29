import Head from 'next/head'
import { signOut, useSession } from 'next-auth/react'
import { Box, Heading, Flex } from 'rebass/styled-components'
import { useRouter } from 'next/router'

import { Button } from '~/components/Button'
import { Header } from '~/components/Header'
import { Sidebar } from '~/components/Sidebar/Sidebar'
import { PageLoader } from '~/components/PageLoader'

function Home() {
  const router = useRouter()

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    }
  })

  if (status === 'loading') {
    return <PageLoader />
  }

  return (
    <>
      <Head>
        <title>Dashoard | rpgsheet</title>
      </Head>

      <Header />

      <Flex as="main" width="100%" maxWidth={1480} mx="auto" px="1.5rem" my="1.5rem">
        <Sidebar />

        <Box as="main">
          <Heading as="h1">Dashboard</Heading>

          <Button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
            Sign out
          </Button>
        </Box>
      </Flex>
    </>
  )
}

export default Home
