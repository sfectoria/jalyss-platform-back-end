import { Module } from '@nestjs/common';
import { CategorieClientsController } from './categorie_client.controller';
import { CategorieClientsService } from './categorie_client.service';
// import { CategorieClientService } from './categorie_client.service';
// import { CategorieClientController } from './categorie_client.controller';

@Module({
  controllers: [CategorieClientsController],
  providers: [CategorieClientsService],
})
export class CategorieClientModule {}
