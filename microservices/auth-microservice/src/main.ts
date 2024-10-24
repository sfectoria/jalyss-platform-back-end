import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:"*"});
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3004,
    },
  });
  await app.startAllMicroservices();
  // await app.listen(3004);
}
bootstrap();
