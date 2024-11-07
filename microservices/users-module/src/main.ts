import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  try {
    await app.startAllMicroservices();
    console.log('Users Microservice started successfully on port 3001');
  } catch (error) {
    console.error('Error starting Users Microservice:', error);
  }
  // await app.listen(3005);
}
bootstrap();