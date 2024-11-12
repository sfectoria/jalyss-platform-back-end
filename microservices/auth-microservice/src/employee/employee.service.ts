import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EmployeeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.prisma.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll() {
    return await this.prisma.employee.findMany({include:{media:true}});
  }

  async findOne(id: number) {
    return await this.prisma.employee.findUnique({ where: { id },include:{media:true} });
  }

  async update(id: number,updateEmployeeDto:UpdateEmployeeDto) {
    return await this.prisma.employee.update({
      where: { id : id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.employee.delete({ where: { id } });
  }
}
