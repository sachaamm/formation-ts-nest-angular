import { Module } from '@nestjs/common';
import { AnimauxController } from './animaux.controller';
import { AnimauxService } from './animaux.service';

@Module({
  controllers: [AnimauxController],
  providers: [AnimauxService]
})
export class AnimauxModule {}
