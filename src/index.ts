import 'dotenv/config'
import { connect } from './connect'
import * as services from './services'

connect()
  .then(async () => {
    console.log('connected to the database')

    await services.accounts.getAll().then(async accounts => {
      for (const account of accounts) {
        console.log(account.fullname, ': ')
        console.log(await account.articles)
      }
    })
  })
  .catch(console.error)
