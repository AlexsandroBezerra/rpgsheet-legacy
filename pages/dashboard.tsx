import Head from 'next/head'
import { Heading } from 'rebass/styled-components'

import { Button } from '~/components/Button'
import { PageLoader } from '~/components/PageLoader'
import { NavigationLayout } from '~/components/NavigationLayout'
import { useAuthentication } from '~/hooks/useAuthentication'
import { signOut } from '~/utils/signOut'

function Home() {
  const { isLoading } = useAuthentication()

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <>
      <Head>
        <title>Dashoard | rpgsheet</title>
      </Head>

      <NavigationLayout>
        <Heading as="h1">Dashboard</Heading>

        <Button type="button" onClick={signOut}>
          Sign out
        </Button>
      </NavigationLayout>
    </>
  )
}

export default Home
