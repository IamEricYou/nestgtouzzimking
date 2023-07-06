import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column('is_handsome')
    isHandSome: boolean;
}
