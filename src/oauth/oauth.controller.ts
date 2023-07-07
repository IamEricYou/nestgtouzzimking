import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

interface IOauth {
    authInfo: {
        name: string,
        path: string,
        pathId: string,
        email: string
    }
}

@Controller('oauth')
export class OauthController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get('/login')
    async login() {
        return;
    }
}

