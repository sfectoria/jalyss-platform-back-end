import { Module } from '@nestjs/common';
import { MulterService } from './multer.service';
import { MulterController } from './multer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    ClientsModule.register([
      {
        name: 'MULTER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  
  controllers: [MulterController],
  providers: [MulterService],
})
export class MulterModule {}
