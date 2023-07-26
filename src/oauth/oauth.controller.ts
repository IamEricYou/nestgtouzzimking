import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { OauthService } from './oauth.service';
import { NaverCodeDTO } from 'src/payload/NaverCodeDTO';

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
    constructor(private oauthService: OauthService) {}

    @Get('/login')
    async login() {
        return this.oauthService.testArr(undefined);
    }
    
    @HttpCode(HttpStatus.OK)
    @Post('/name')
    signIn(@Body() idAndPasswordDTO: Record<string, any>) {
        return this.oauthService.signIn(idAndPasswordDTO.name, idAndPasswordDTO.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('/naver')
    oauthLogin(@Body() naverCodeDTO: NaverCodeDTO) {
        return this.oauthService.naverOauthLogin(naverCodeDTO.code);
    }
}


