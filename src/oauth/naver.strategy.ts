import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-naver";
import { OauthService } from "./oauth.service";

@Injectable()
export class NaverStategy extends PassportStrategy(Strategy){


    constructor(private oauthService: OauthService) {
        super({
          clientID: process.env.NAVER_CLIENT_ID,
          clientSecret: process.env.NAVER_CLIENT_SECRET,
          callbackURL: process.env.NAVER_CALLBACK_URL,
        });
      }

    clientId: string = 'clientId';
    clientSecret: string = 'clientSecret';
    clientCallbackUrl: string = 'https://google.com';

}