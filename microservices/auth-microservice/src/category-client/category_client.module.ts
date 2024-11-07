import { Module } from '@nestjs/common';
import { CategoryClientsController } from './category_client.controller';
import { CategoryClientsService } from './category_client.service';
// import { CategorieClientService } from './categorie_client.service';
// import { CategorieClientController } from './categorie_client.controller';

@Module({
  controllers: [CategoryClientsController],
  providers: [CategoryClientsService],
})
export class CategoryClientModule {}
