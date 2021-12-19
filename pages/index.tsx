import Head from 'next/head'

import { Home } from '~/pages/Home'

function HomePage() {
  return (
    <>
      <Head>
        <title>Login | rpgsheet</title>
      </Head>

      <Home />
    </>
  )
}

export default HomePage
