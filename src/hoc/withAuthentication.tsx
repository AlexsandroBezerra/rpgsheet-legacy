import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function withAuthentication(Page: NextPage<never>) {
  function Wrapped(props: never) {
    const router = useRouter()

    const { status } = useSession({
      required: true,
      onUnauthenticated() {
        router.push('/')
      }
    })

    if (status === 'loading') {
      return <h1>Carregando...</h1>
    }

    return <Page {...props} />
  }

  Wrapped.displayName = `withAuthentication(${Page.displayName})`

  return Wrapped
}
