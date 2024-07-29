import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { CategorieClientsController } from './categorie_client.controller';
import { CategorieClientsService } from './categorie_client.service';

@Module({
  controllers: [ClientsController,CategorieClientsController],
  providers: [ClientsService,CategorieClientsService],
})
export class ClientModule {}
