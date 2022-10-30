import type { Application } from './declarations.js'
const sleep = (s: number) => new Promise((r) => setTimeout(r, s * 1000 | 0))

const HolidayMessages = [
  "Yes, I'm Sick, Officer. Sick From The Disease Eating Away At Me Inside. Sick Of People Who Don't Appreciate Their Blessings. Sick Of Those Who Scoff At The Suffering Of Others. I'm Sick Of It All!",
  "When Faced With Death, Who Should Live Versus Who Will Live Are Two Entirely Separate Things.",
  "I've Never Murdered Anyone In My Life. The Decisions Were Up To Them.",
  "How You Play The Cards You're Dealt Is All That Matters.",
  "Once You Are In Hell, Only The Devil Can Help You Out.",
  "As You Can See, The Choice Is Not So Clear When You're Face To Face With The People Who's Blood Will Stain Your Hands",
  "Don't Worry, You're Sound Asleep And Can't Feel A Thing.",
  "You're Probably Wondering Where You Are. I'll Tell You Where You Might Be. You Might Be In The Room You Die In.",
  "Congratulations, You Are Still Alive. Most People Are So Ungrateful To Be Alive... But Not You, Not Anymore.",
  "Every Day Of Your Working Life You've Given People News That They'll Die. Now, You Will Be The Cause Of Death.",
  "It Will Be Like Finding A Needle In A Haystack.",
  "You Think It's Over Just Because I Am Dead, But The Games Have Just Begun.",
  "The Rules Of Our Game Have Been Made Very Clear. You Need To Abide By Those Rules.",
  "If You're Good At Anticipating The Human Mind, It Leaves Nothing To Chance.",
  "Live Or Die. Make Your Choice.",
  "I Want To Play A Game.",
  "Game Over."
]


export const HolidayEmojii = '🎃'
export const HolidayBot = async (app: Application) => {
  const users = app.service('users')
  const uidField = app.service('users').id
  const messages = app.service('messages')
  // await sleep(2) // cannot be delayed
  await users.create({ [uidField]: 69, email: 'Dr. Jigsäw', password: 'killer' })
  await sleep(2)
  const text = HolidayMessages[HolidayMessages.length * Math.random() - 1 | 0]
  messages.create({ text, userId: 69 })
}
export const HolidayAvatar = 'data:image/jpeg;base64,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'
