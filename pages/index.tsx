import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

function Home() {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>rpgsheet</title>
      </Head>

      <h1>rpgsheet</h1>

      <button type="button" onClick={() => signIn('github', { callbackUrl: '/dashboard' })}>
        Sign in with github
      </button>

      <button type="button" onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
        Sign in with google
      </button>

      <p>{query.error && 'Erro ao fazer login'}</p>
    </>
  )
}

export default Home
