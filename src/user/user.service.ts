import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

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

    saveAutomatedHandsomeBoy(): string {
        // await this.userRespository.save(new User({
        //     name: 'name1',
        //     isHandsome: false
        // }));
        return 'OK';
    }
}
