import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimauxModule } from './animaux/animaux.module';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'zoo',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ❗️dev only
    }),
    AnimauxModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
