import { Module } from '@nestjs/common';
import { ArticalsService } from './articals.service';
import { ArticalsController } from './articals.controller';

@Module({
  controllers: [ArticalsController],
  providers: [ArticalsService],
})
export class ArticalsModule {}
