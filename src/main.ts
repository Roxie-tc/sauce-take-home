import { schema } from './gql/schema'
import {createYoga} from "graphql-yoga";
import { createServer } from 'http'

/**
 * Runs the GraphQL server
 */
async function main() {
  const yoga = createYoga({ schema })
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}

main()