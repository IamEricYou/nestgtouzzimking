import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { OauthService } from './oauth.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [OauthService],
  controllers: [OauthController]
})
export class OauthModule {}
