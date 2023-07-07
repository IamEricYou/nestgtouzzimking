import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({nullable: true})
    name: string;

    @Column({ name: 'is_handsome', default: false})
    isHandSome: boolean;
}
