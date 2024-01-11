import { request, gql } from 'graphql-request'
const MASTER_URL:'fdfgfgh',
const document = gql`
  {
    company {
      ceo
    }
  }
`
await request('https://api.spacex.land/graphql/', document)