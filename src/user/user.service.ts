import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UzzimException } from 'src/exception/uzzim.exception';
import { checkArrIsEmpty } from 'src/util/util';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRespository: Repository<User>,
    ) {
        this.userRespository = userRespository;
    }

    findAllSexyUsers(): Promise<User[]> {
        return this.userRespository.find();
    }

    async saveAutomatedHandsomeBoy(user: User): Promise<void> {
        await this.userRespository.save(user);
    }

    async findByUserById(id: string): Promise<User> {
        const userId: number = Number(id);
        const user: User = await this.userRespository.findOne({ where: {
            id: userId
        }})
        if ( user !== null) return user;
        throw new UzzimException();
    }

    async findByUserName(username: string): Promise<User | null> {
        const userArr: User[] = await this.userRespository.find({
            where: {
                name: username,
            },
        });
        if (checkArrIsEmpty(userArr)) { 
            return null;
        }
        return userArr[0];
    }
}
