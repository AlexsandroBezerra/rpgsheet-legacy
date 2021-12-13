import { Center, Spinner } from '@chakra-ui/react'
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
      return (
        <Center h="100vh">
          <Spinner />
        </Center>
      )
    }

    return <Page {...props} />
  }

  Wrapped.displayName = `withAuthentication(${Page.displayName})`

  return Wrapped
}
