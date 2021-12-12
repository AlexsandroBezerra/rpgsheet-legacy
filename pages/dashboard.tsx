import Head from 'next/head'
import { signOut, useSession } from 'next-auth/react'

import { withAuthentication } from '~/hoc/withAuthentication'
import { Button, Heading } from '@chakra-ui/react'

function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dashoard | rpgsheet</title>
      </Head>

      <Heading>Dashboard</Heading>
      <Heading as="h2">
        Signed with: {session?.user?.name} - {session?.user?.email}
      </Heading>

      <Button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
        Sign out
      </Button>
    </>
  )
}

export default withAuthentication(Home)
