import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3012,
    },
  });
  try {
    await app.startAllMicroservices();
    console.log('Estimate Microservice started successfully on port 3012');
  } catch (error) {
    console.error('Error starting Estimate Microservice:', error);
  }
  // await app.listen(3000);
}
bootstrap();
