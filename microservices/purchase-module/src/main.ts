import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3005,
    },
  });
  try {
    await app.startAllMicroservices();
    console.log('Purchase Microservice started successfully on port 3005');
  } catch (error) {
    console.error('Error starting Purchase Microservice:', error);
  }
}
bootstrap();
