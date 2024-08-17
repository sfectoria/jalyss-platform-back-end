import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class EmployeesService {
  constructor(
    @Inject('EMPLOYEE_MICROSERVICE') private readonly employeeClient: ClientProxy,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    console.log('create employee data:', createEmployeeDto);
    return this.employeeClient.send(
      { cmd: 'create_employee' }, 
      createEmployeeDto);
  }

  findAll() {
    console.log('find All Employees called');
    
    return this.employeeClient.send(
      {cmd:'all_employees'},
      {}
    );
  }

  findOne(id: number) {
    console.log(`find One with id ${id} called`);
    
    return  this.employeeClient.send(
      { cmd:'getOne_employee'},
      { id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    console.log(`update with id ${id} called`);

    return this.employeeClient.send(
      { cmd:'update_employee'},
      { id });
  }

  remove(id: number) {
    console.log(`remove with id ${id} called`);

    return this.employeeClient.send(
      {cmd:'delete_employee'},
      { id })
  }
}
