import { signIn as NextAuthSignIn } from 'next-auth/react'

type SignInProvider = 'github' | 'google'

export function signIn(provider: SignInProvider) {
  return NextAuthSignIn(provider, { callbackUrl: '/dashboard' })
}
