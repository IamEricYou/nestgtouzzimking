import { Injectable } from '@nestjs/common';
import { UzzimException } from 'src/exception/uzzim.exception';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OauthService {

    constructor(private userService: UserService) {}

    async validateUser(id: string): Promise<any> {
        const user = await this.userService.findByUserById(id);
        if (user) return user;
        return null;
    }

    async signIn(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUserName(username);
        if (user === null) return {};
        if (user?.isHandSome) throw new UzzimException();
        const { isHandSome, ... result } = user;
        return result;
    }
}
