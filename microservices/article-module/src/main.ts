import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3006,
    },
  });
  try {
    await app.startAllMicroservices();
    console.log('Article Microservice started successfully on port 3006');
  } catch (error) {
    console.error('Error starting Article Microservice:', error);
  }
  // await app.listen(3006);
}
bootstrap();
