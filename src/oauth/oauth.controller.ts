import { Controller, Get } from '@nestjs/common';

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
    ) {}

    @Get('/login')
    async login() {
        return;
    }
}

