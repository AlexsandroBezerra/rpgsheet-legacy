import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { FaunaAdapter } from "@next-auth/fauna-adapter"

import { faunaClient } from "~/services/fauna"

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FaunaAdapter(faunaClient),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: { params: { scope: 'read:user' } }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  pages: {
    error: '/'
  }
})