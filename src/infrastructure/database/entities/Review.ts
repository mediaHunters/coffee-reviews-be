import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import type { Coffee } from 'infrastructure/database/entities/Coffee';
import type { User } from 'infrastructure/database/entities/User';
import Model from 'infrastructure/database/entities/Base';

@Entity()
export class Review extends Model {
  @Column('decimal')
  rating!: number;

  @Column('decimal')
  look!: number;

  @Column('decimal')
  smell!: number;

  @Column('decimal')
  taste!: number;

  @Column('text')
  coffeeId!: string;

  @ManyToOne('Coffee', (Coffee: Coffee) => Coffee.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'coffee', referencedColumnName: 'id' })
  coffee!: Coffee;

  @Column('text', { nullable: true })
  userId!: string;

  @ManyToOne('User', (user: User) => user.reviews)
  @JoinColumn({ name: 'user', referencedColumnName: 'id' })
  user!: User;
}
