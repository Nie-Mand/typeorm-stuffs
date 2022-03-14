import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  ManyToOne,
} from 'typeorm'
import { Account } from './account'

@Entity()
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
    type: 'text',
  })
  content: string

  @ManyToOne(() => Account, account => account.articles)
  author: Account
}
