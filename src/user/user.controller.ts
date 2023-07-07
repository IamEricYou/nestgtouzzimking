import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
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
      data: allSexyUsers,
    });
  }

  @Get('/find/:id')
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findByUserById(id);
  }

  @Post('/create')
  async autoCreateuser(@Body() user: User): Promise<string> {
    await this.userService.saveAutomatedHandsomeBoy(user);
    console.log(user);
    return Object.assign({
      code: 201,
      data: { ...user },
      statusMsg: 'wow~~~~~~~~~',
    });
  }
}
