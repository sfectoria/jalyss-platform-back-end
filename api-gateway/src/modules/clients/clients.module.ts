import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { CategoryClientsController } from './category_client.controller';
import { CategoryClientsService } from './category_client.service';

@Module({
  controllers: [ClientsController,CategoryClientsController],
  providers: [ClientsService,CategoryClientsService],
})
export class ClientModule {}
