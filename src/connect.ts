import { ConnectionOptions, createConnection } from 'typeorm'
import { entities } from './models'

export const connect = async () => {
  const options = {
    type: 'postgres',
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    entities,
    synchronize: true,
  } as ConnectionOptions

  return createConnection(options)
}
