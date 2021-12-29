import { signOut as nextAuthSignOut } from 'next-auth/react'

export function signOut() {
  nextAuthSignOut({ callbackUrl: '/' })
}
