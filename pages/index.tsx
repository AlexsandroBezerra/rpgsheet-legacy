import { signIn, useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

function Home() {
  const { replace } = useRouter()
  const { data: session, status } = useSession()

  // useEffect(() => {
  //   if (session) {
  //     replace("/dashboard")
  //   }
  // }, [session, replace])

  // if (status === "loading") {
  //   return (
  //     <>
  //       <Head>
  //         <title>rpgsheet</title>
  //       </Head>

  //       <h1>carregando...</h1>
  //     </>
  //   )
  // }

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
    </>
  )
}

export default Home
