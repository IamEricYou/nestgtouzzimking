import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('girls')
@Controller('girls')
export class GirlsController {

    @Get()
    getGirls(): string {
        return 'HELL YEAH';
    }
}
