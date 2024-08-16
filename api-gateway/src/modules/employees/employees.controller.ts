import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';

@ApiTags('employees')

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('create')
  create(@Payload() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get('all')
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.employeesService.findOne(+id);
  }

  @Patch(':id')
  //update(@Payload @Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto)
  update(@Payload() data:{id: number,updateEmployeeDto: UpdateEmployeeDto}) {
    return this.employeesService.update(data.id, data.updateEmployeeDto);
  }

  @Delete(':id')
  //remove(@Param('id') id: string)
  remove(@Payload() id: number) {
    return this.employeesService.remove(+id);
  }
}
