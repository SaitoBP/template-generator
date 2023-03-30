import chalk, { ChalkInstance } from 'chalk'

type Template = {
  key: string
  name: string
  description: string
  color: ChalkInstance
}

export const templates: Template[] = [
  {
    key: 'rest-client',
    name: 'REST Game Client',
    description: 'A simple template for games using REST',
    color: chalk.cyan
  },
  {
    key: 'graphql-client',
    name: 'GraphQL Game Client',
    description: 'A simple template for games using GraphQL',
    color: chalk.magenta
  }
]