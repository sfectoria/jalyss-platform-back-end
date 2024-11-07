import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';

import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { ClientsController } from './clients/clients.controller';
import { CategoryClientsController } from './category-client/category_client.controller';
import { ClientsService } from './clients/clients.service';
import { CategoryClientsService } from './category-client/category_client.service';
import { ClientsModule } from './clients/clients.module';
import { CategoryClientModule } from './category-client/category_client.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),AuthModule,ClientsModule,CategoryClientModule,EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
