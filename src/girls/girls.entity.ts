import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Girls')
export class GirlsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;
}
