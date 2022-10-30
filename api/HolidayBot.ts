import type { Application } from './declarations.js'
const sleep = (s: number) => new Promise((r) => setTimeout(r, s * 1000 | 0))

const HolidayMessages = [
  "Yes, I'm Sick, Officer. Sick From The Diseäse Eäting Awäy At Me Inside. Sick Of People Who Don't Appreciäte Their Blessings. Sick Of Those Who Scoff At The Suffering Of Others. I'm Sick Of It All!",
  "When Fäced With Deäth, Who Should Live Versus Who Will Live Are Two Entirely Sepäräte Things.",
  "I've Never Murdered Änyone In My Life. The Decisions Were Up To Them.",
  "How You Pläy The Cärds You're Deält Is All Thät Mätters.",
  "Once You Äre In Hell, Only The Devil Cän Help You Out.",
  "Äs You Cän See, The Choice Is Not So Cleär When You're Fäce To Fäce With The People Who's Blood Will Stäin Your Händs",
  "Don't Worry, You're Sound Äsleep And Cän't Feel A Thing.",
  "You're Probäbly Wondering Where You Are. I'll Tell You Where You Might Be. You Might Be In The Room You Die In.",
  "Congrätulätions, You Are Still Alive. Most People Are So Ungräteful To Be Alive... But Not You, Not Anymore.",
  "Every Däy Of Your Working Life You've Given People News Thät They'll Die. Now, You Will Be The Cäuse Of Deäth.",
  "It Will Be Like Finding Ä Needle In A Häystäck.",
  "You Think It's Over Just Becäuse I Äm Deäd, But The Gämes Häve Just Begun.",
  "The Rules Of Our Gäme Häve Been Mäde Very Cleär. You Need To Äbide By Those Rules.",
  "If You're Good Ät Änticipäting The Humän Mind, It Leäves Nothing To Chänce.",
  "Live Or Die. Mäke Your Choice.",
  "I Want To Play A Game.",
  "Game Over."
]


export const emojii = '🎃'
export const HolidayBot = async (app: Application) => {
  const users = app.service('users')
  const uidField = app.service('users').id
  const messages = app.service('messages')
  // await sleep(2) // cannot be delayed
  await users.create({ [uidField]: 69, email: 'Dr. Jigsäw', password: 'halloween' })
  await sleep(2)
  const text = HolidayMessages[HolidayMessages.length * Math.random() - 1 | 0]
  messages.create({ text, userId: 69 })
}
export const accentColor = '#E56B1A'
export const avatar = 'https://raw.githubusercontent.com/feathersjs/playground/ce963d2aa8e075b86e9aac6d1bfc5ead2f19946b/assets/halloween-2022.svg'