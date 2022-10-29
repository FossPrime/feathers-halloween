import type { Application } from './declarations.js'
const sleep = (s: number) => new Promise((r) => setTimeout(r, s * 1000 | 0))

export const HolidayEmojii = '🎃'
export const HolidayBot = async (app: Application) => {
  const users = app.service('users')
  const uidField = app.service('users').id
  const messages = app.service('messages')
  await users.create({ [uidField]: '1', email: 'Dr. Jigsaw', password: 'killer' })
  await sleep(5)
  messages.create({ text: 'Would you like to play a game?', userId: '1' })
}

export default HolidayBot
