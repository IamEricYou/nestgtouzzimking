import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column({ name: 'is_handsome' })
    isHandSome: boolean;
}
