import Head from "next/head"
import { signOut, useSession } from "next-auth/react"

import { withAuthentication } from "~/hoc/withAuthentication"

function Home() {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Dashoard | rpgsheet</title>
      </Head>

      <h1>Dashboard</h1>
      <h2>
        Signed with: {session?.user?.name} - {session?.user?.email}
      </h2>

      <button type="button" onClick={() => signOut({ callbackUrl: "/" })}>
        Sign out
      </button>
    </>
  )
}

export default withAuthentication(Home)
