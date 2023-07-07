import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OauthService {

    constructor(private userService: UserService) {}

    async validateUser(id: string): Promise<any> {
        const user = await this.userService.findByUserById(id);
        if (user) return user;
        return null;
    }
}
