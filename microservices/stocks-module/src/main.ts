import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3003,
    },
  });
  try {
    await app.startAllMicroservices();
    console.log('Stocks Microservice started successfully on port 3003');
  } catch (error) {
    console.error('Error starting Stocks Microservice:', error);
  }
  // await app.listen(3003);
}
bootstrap();