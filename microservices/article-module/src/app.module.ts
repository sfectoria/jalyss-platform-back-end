import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { ArticlesModule } from './article/article.module';
import { PublishingHousesModule } from './publishing_houses/publishing_houses.module';
import { CategoryArticlesModule } from './category-article/category-article.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    
    ArticlesModule,
    
    PublishingHousesModule,
    
    CategoryArticlesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
