import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostsEntity {
  //NOTE: 实体
  @PrimaryGeneratedColumn() // 定义该属性为主键，并自动按照设定的方式生成唯一值
  id: number; // 标记为主列，值自动生成

  @Column()
  title: string;

  @Column()
  author: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  thumb_url: string;

  @Column({ default: 0 })
  type: number;

  @Column({
    type: 'timestamp',
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_time: Date;

  @Column({
    type: 'timestamp',
    name: 'update_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  update_time: Date;
}
