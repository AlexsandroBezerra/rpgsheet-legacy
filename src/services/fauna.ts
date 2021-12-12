import { Client as FaunaClient } from "faunadb"

export const faunaClient = new FaunaClient({
  secret: process.env.FAUNADB_SECRET as string,
  domain: 'db.us.fauna.com'
})