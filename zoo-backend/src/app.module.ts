import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimauxModule } from './animaux/animaux.module';

@Module({
  imports: [AnimauxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
