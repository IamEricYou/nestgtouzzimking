import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'pass',
    database: 'testdb',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: false,
  })],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
