import { Inject,Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EmployeesService {
  constructor(
    @Inject('EMPLOYEE_MICROSERVICE') private readonly employeeClient: ClientProxy,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    console.log('create employee data',CreateEmployeeDto);
    
    return this.employeeClient.send(
      { cmd: 'create_employee' }, 
      CreateEmployeeDto);
  }

  findAll() {
    console.log('findAll employee called');
    return this.employeeClient.send(
      { cmd: 'all_employees' },
       {});
  }

  findOne(id: number) {
    console.log('findOne employee id:', id);
    return this.employeeClient.send(
      { cmd: 'getOne_employee' }, 
      { id });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    console.log('update id and data:', id, updateEmployeeDto);
    return this.employeeClient.send(
      { cmd: 'update_employee' },
      { id, updateEmployeeDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.employeeClient.send(
      { cmd: 'delete_employee' }, 
      { id });
  }
}
