import Head from "next/head"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

function Home() {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>rpgsheet</title>
      </Head>

      <h1>rpgsheet</h1>

      <button
        type="button"
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      >
        Sign in with github
      </button>

      {query.error && "Erro ao fazer login"}
    </>
  )
}

export default Home
