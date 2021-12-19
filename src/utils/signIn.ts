import { signIn as NextAuthSignIn } from 'next-auth/react'

import type { AddToastProps } from '../contexts/Toast/ToastContext'

type SignInProvider = 'github' | 'google'

export function signIn(provider: SignInProvider) {
  return NextAuthSignIn(provider, { callbackUrl: '/dashboard' })
}

const NOT_LINKED_ACCOUNT = 'OAuthAccountNotLinked'

export function resolveSignInErrorsToToastData(queryError: string): AddToastProps {
  if (queryError === NOT_LINKED_ACCOUNT) {
    return {
      type: 'error',
      title: 'Erro na autenticação',
      description: 'Algo deu errado na autenticação, tente novamente com outro método de autenticação'
    }
  }

  return {
    type: 'error',
    title: 'Erro na autenticação',
    description: 'Algo deu errado na autenticação, tente entrar novamente'
  }
}
