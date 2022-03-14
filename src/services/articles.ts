import { Article } from '../models/article'
import { Account } from '../models/account'

export const createAccount = async (userId: number, title: string) => {
  const author = await Account.findOne({
    where: {
      id: userId,
    },
  })

  if (!author) {
    throw new Error('Author not found')
  }

  const article = new Article()
  article.title = title
  article.content = 'lorem ipsum'
  article.author = author

  await article.save()
}
