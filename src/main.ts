import { execute, parse } from 'graphql'
import { schema } from './schema'

async function main() {
  const myQuery = parse(/* GraphQL */ `
    query {
      feedback(id: 1) {
        id
        text
      }
    }
  `)

  const result = await execute({
    schema,
    document: myQuery
  })
}

main()