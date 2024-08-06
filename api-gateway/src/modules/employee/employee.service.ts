import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject('EMPLOYEE_MICROSERVICE') private readonly employeeEmployee: ClientProxy,
  ){}
  create(createEmployeeDto: CreateEmployeeDto) {
    console.log('create employee data:', createEmployeeDto);

    return this.employeeEmployee.send({ cmd:'create_employee'}, createEmployeeDto);
  }

  findAll() {
    console.log('findAll called');
    return this.employeeEmployee.send({ cmd: 'all_employee' }, {});
  }

  findOne(id: number) {
    console.log('findOne id:', id);
    return this.employeeEmployee.send({ cmd: 'getOne_employee' }, { id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    console.log('update id and data:', id, updateEmployeeDto);
    return this.employeeEmployee.send(
      { cmd: 'update_employee' },
      { id, updateEmployeeDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.employeeEmployee.send({ cmd: 'delete_employee' }, { id });
  } 
 }

