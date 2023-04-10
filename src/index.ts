import chalk from 'chalk'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import prompts from 'prompts'
import { templates } from './templates.js'

type Variables = {
  regex: RegExp
  value: any
  enabled: boolean
}

/**
 * Current working directory
 */
const cwd = process.cwd()

async function init() {
  let results: prompts.Answers<'name' | 'template' | 'api'>

  try {
    results = await prompts([
      {
        type: 'text',
        message: 'What is the game name?',
        name: 'name',
        validate: (value) => {
          if (fs.existsSync(path.join(cwd, value))) {
            return chalk.red(`Directory "${value}" already exists`)
          }

          return true
        }
      },
      {
        type: 'select',
        message: 'Select a template',
        name: 'template',
        choices: templates.map(template => ({
          title: template.color(template.name),
          value: template.key,
          description: template.description,
        }))
      },
      {
        type: (prev) => prev === 'rest-client' ? 'text' : null,
        message: 'What is the game api URL?',
        name: 'api',
        validate: (value) => {
          /**
           * Regex to validate URL:
           * [Valid] -> http://www.example.com
           * [Valid] -> https://www.example.com
           * [Valid] -> http://www.example.com:8080
           * [Valid] -> http://www.example.com:8080/path
           * [Valid] -> http://localhost
           * [Invalid] -> www.example.com
           * [Invalid] -> example.com
           */
          const urlRegex: RegExp = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

          if (!urlRegex.test(value)) {
            return chalk.red(`Invalid URL`)
          }

          return true
        }
      }
    ])
  } catch (cancelled: any) {
    console.log(cancelled.message)
    return
  }

  const root = path.join(cwd, results.name)

  fs.mkdirSync(root, { recursive: true })

  const templatePath = path.resolve(
    fileURLToPath(import.meta.url),
    '../..',
    `template-${results.template}`
  )

  const files = fs.readdirSync(templatePath)
  const filesToFilter = ['package.json', 'node_modules', 'dist', 'yarn.lock']
  const filteredFiles = files.filter(file => !filesToFilter.includes(file))

  for (const file of filteredFiles) {
    write(file)
  }

  const pkg = JSON.parse(
    fs.readFileSync(path.join(templatePath, 'package.json'), 'utf-8')
  )

  pkg.name = results.name

  write('package.json', JSON.stringify(pkg, null, 2) + '\n')

  function write(file: string, content?: string) {
    const targetPath = path.join(root, file)

    if (content) {
      fs.writeFileSync(targetPath, content, 'utf-8')
    }

    if (!content) {
      copy(path.join(templatePath, file), targetPath)
    }
  }

  function copy(src: string, dest: string) {
    const stat = fs.statSync(src)

    if (stat.isDirectory()) {
      copyDir(src, dest)
    }

    if (stat.isFile()) {
      /**
       * Read the content of the file
       */
      const fileContent = fs.readFileSync(src, 'utf-8')

      /**
       * Define the variables to replace
       */
      const variables: Variables[] = [
        {
          enabled: true,
          regex: /\$\$GAME_NAME\$\$/g,
          value: results.name
        },
        {
          enabled: results.template === 'rest-client',
          regex: /\$\$API_URL\$\$/g,
          value: results.api
        }
      ]

      /**
       * Replace the variables in the content if enabled
       */
      const newContent = variables.reduce((content, variable) => {
        if (variable.enabled) {
          return content.replace(variable.regex, variable.value)
        }

        return content
      }, fileContent)

      /**
       * Write the new content to the destination file
       */

      fs.writeFileSync(dest, newContent, 'utf-8')
    }
  }

  function copyDir(srcDir: string, destDir: string) {
    fs.mkdirSync(destDir, { recursive: true })

    for (const file of fs.readdirSync(srcDir)) {
      const src = path.resolve(srcDir, file)
      const dest = path.resolve(destDir, file)

      copy(src, dest)
    }
  }
}

init().catch((error) => {
  console.error(error)
  process.exit(1)
})