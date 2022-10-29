import type { Application } from './declarations.js'
// Don't remove this comment. It's needed to format import lines nicely.

export const HolidayBot = (app: Application) => {
  app.service('users').create({email: 'Dr. Jigsaw', password: 'killer' })
}

export default HolidayBot
