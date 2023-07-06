import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
    ) {
        this.userService = userService;
    }

    @Get()
    getUser(): string {
        return 'hello user';
    }

    @Get('/find')
    async findAllSexyUser(): Promise<User[]> {
        const allSexyUsers = await this.userService.findAllSexyUsers();
        return Object.assign({
            code: 200,
            data: allSexyUsers
        })
    }
}
