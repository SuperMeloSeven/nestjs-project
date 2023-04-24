import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class PostsEntity {
  //NOTE: 实体
  @PrimaryGeneratedColumn()
  id: number; // 标记为主列，值自动生成

  @Column()
  title: string;

  @Column()
  author: string;

  @Column('text')
  content: string;

  @Column({ default: '' })
  thumb_url: string;

  // @Column('tinyint')
  // type: number;

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
