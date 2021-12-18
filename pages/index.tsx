import Head from 'next/head'

import { Home } from '~/pages/Home'

function HomePage() {
  return (
    <>
      <Head>
        <title>rpgsheet</title>
      </Head>

      <Home />
    </>
  )
}

export default HomePage
