import { defineConfig } from 'vite'
import { feathers } from 'feathers-vite'
import util from 'node:util'
import { execFile } from 'node:child_process'

async function getDevUser() {
  const run = util.promisify(execFile)
  const dv = [
    ['name', 'John Doe'],
    ['email', 'john@example.com']
  ]
  const gitInfo = await Promise.all([
    run('/usr/bin/git', ['config', '--get', 'user.name']),
    run('/usr/bin/git', ['config', '--get', 'user.email'])
  ])
  const result = gitInfo.reduce((pv, v, i) => (pv[dv[i][0]] = v || dv[i][1]), {})

  console.log(result)
}

// https://vitejs.dev/config/#async-config
export default defineConfig(async ({ command }) => {
  getDevUser()
  return {
    plugins: [feathers()],
    define: {
      __GIT_NAME: '"Elmer Fud"',
      __GIT_EMAIL: "'oldarney@gmail.com'"
    }
  }
})
