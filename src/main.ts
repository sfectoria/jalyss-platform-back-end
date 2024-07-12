import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  const config = new DocumentBuilder()
    .setTitle('JALYSS API')
    .setDescription('The JALYSS API description')
    .setVersion('1.0')
    .addTag('JALYSS')
    .addApiKey(
      { type: 'apiKey', name: 'Authorization', in: 'header' },
      'apiKey',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
