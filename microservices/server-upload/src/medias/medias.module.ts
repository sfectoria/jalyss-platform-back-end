import { Module } from '@nestjs/common';
import { MediasService } from './medias.service';
import { MediasController } from './medias.controller';

@Module({
  controllers: [MediasController],
  providers: [MediasService],
  imports: [],
})
export class MediasModule {}
