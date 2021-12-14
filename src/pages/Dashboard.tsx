import Head from 'next/head'
import { signOut } from 'next-auth/react'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'

import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'

export function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashoard | rpgsheet</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <Box>
            <Heading as="h1">Dashboard</Heading>
            <Text>Em breve...</Text>

            <Button type="button" onClick={() => signOut()} mt="1.5rem">
              Log out
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
