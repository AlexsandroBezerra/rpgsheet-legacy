import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export function useAuthentication() {
  const router = useRouter()

  const { status, data } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
    }
  })

  return { session: data, isLoading: status === 'loading' }
}
