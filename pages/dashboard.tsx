import { useSession } from 'next-auth/react'
import { Center, Spinner } from '@chakra-ui/react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const Dashboard = dynamic<{}>(() => import('~/pages/Dashboard').then(mod => mod.Dashboard), {
  loading: () => <>Carregando...</>
})

function DashboardPage() {
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

  return <Dashboard />
}

export default DashboardPage
