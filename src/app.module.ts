import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MulterModule } from './microservices/multer/multer.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    AuthModule,
    MulterModule,
    PrismaModule.forRoot({ isGlobal: true }),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
