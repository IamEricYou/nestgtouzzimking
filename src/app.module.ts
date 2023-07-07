import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GirlsModule } from './girls/girls.module';

@Module({
  imports: [GirlsModule,
TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'pass',
    database: 'testdb',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), UserModule, GirlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
