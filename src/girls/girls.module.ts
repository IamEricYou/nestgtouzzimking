import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GirlsController } from './girls.controller';
import { GirlsEntity } from './girls.entity';
import { GirlsService } from './girls.service';

@Module({
  imports: [TypeOrmModule.forFeature([GirlsEntity])],
  providers: [GirlsService],
  controllers: [GirlsController]
})
export class GirlsModule { }
