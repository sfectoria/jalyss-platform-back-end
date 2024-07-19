import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
