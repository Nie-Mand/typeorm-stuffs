import { Account } from '../models/account'

// generate string
function generateRandomString(length: number): string {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const create = () => {
  const account = new Account()

  account.fullname = generateRandomString(10)
  account.email = `${generateRandomString(9)}@gmail.com`
  account.password = generateRandomString(8)
  account.setNickname()
  console.log('account created')
  return account.save()
}

export const getAll = () => Account.find({})

export const getById = (id: number) =>
  Account.find({
    where: {
      id,
    },
  })

export const updateNickname = async (id: number, nickname: string) => {
  const account = await Account.findOne({ where: { id } })

  if (!account) {
    throw new Error('account not found')
  }

  account.nickname = nickname

  await account.save()
}

export const deleteAccount = async (id: number) => {
  const account = await Account.findOne({ where: { id } })

  if (!account) {
    throw new Error('account not found')
  }

  await account.remove()
}
