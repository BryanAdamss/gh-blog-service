/**
 * @author GuangHui
 * @description Post模型
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'
import { Length, IsNotEmpty } from 'class-validator'

@Entity() // 声明实体
export class Post {
  @PrimaryGeneratedColumn() // 自增主键
  id: number

  @Column()
  @Length(4, 50)
  @IsNotEmpty()
  title: string

  @Column()
  @IsNotEmpty()
  content: string

  @Column()
  @CreateDateColumn() // 创建日期
  createdAt: Date

  @Column()
  @UpdateDateColumn() // 更新日期
  updatedAt: Date
}
