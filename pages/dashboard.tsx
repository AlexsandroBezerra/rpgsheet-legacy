import Head from 'next/head'
import { signOut, useSession } from 'next-auth/react'
import { Button, Heading } from 'rebass/styled-components'

import { withAuthentication } from '~/hoc/withAuthentication'

function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dashoard | rpgsheet</title>
      </Head>

      <Heading as="h1">Dashboard</Heading>
      <Heading>
        Signed with: {session?.user?.name} - {session?.user?.email}
      </Heading>

      <Button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
        Sign out
      </Button>
    </>
  )
}

export default withAuthentication(Home)
