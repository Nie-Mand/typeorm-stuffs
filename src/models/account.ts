import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  Column,
  OneToMany,
} from 'typeorm'
import { Article } from './article'

@Entity()
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  fullname: string

  @Column({
    nullable: true,
  })
  nickname: string

  @Column()
  email: string

  @Column()
  password: string

  @OneToMany(() => Article, article => article.author, {
    cascade: true,
  })
  articles: Promise<Article[]>

  setNickname() {
    this.nickname = this.email.split('@')[0]
  }
}
