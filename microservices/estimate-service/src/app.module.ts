import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstimateModule } from './estimate/estimate.module';

@Module({
  imports: [EstimateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
