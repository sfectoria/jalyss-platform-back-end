import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });
  try {
    await app.startAllMicroservices();
    console.log('Selling Microservice started successfully on port 3002');
  } catch (error) {
    console.error('Error starting Selling Microservice:', error);
  }
  // await app.listen(3002);
}
bootstrap();
