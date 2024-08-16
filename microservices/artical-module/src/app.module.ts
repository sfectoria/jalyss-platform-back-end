import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { ArticalsModule } from './articals/articals.module';
import { PublishingHousesModule } from './publishing_houses/publishing_houses.module';
import { CategoryArticalsModule } from './category-artical/category-articals.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    
    ArticalsModule,
    
    PublishingHousesModule,
    
    CategoryArticalsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
