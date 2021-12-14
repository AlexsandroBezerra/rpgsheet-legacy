import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { PageLoader } from '~/components/page-loader'

const Dashboard = dynamic<{}>(() => import('~/pages/Dashboard').then(mod => mod.Dashboard), {
  loading: () => <PageLoader />
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
    return <PageLoader />
  }

  return <Dashboard />
}

export default DashboardPage
