import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';

// @Module({
//   imports: [EmployeeModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),    
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
