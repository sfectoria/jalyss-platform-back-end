import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './articles/articles.module';
import { PublishingHousesModule } from './publishing_houses/publishing_houses.module';
import { CategorieArticlesModule } from './categorie-articles/categorie-articles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    
    ArticlesModule,
    
    PublishingHousesModule,
    
    CategorieArticlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}