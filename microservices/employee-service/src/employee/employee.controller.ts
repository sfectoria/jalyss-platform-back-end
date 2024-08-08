import { Controller} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @MessagePattern({ cmd: 'create_employee' })
  async create(@Payload() message: CreateEmployeeDto): Promise<any> {
    console.log('create payload:', message);
    return await this.employeeService.create(message);
  }


  @MessagePattern({ cmd: 'all_employee' })
  async findAll() {
    console.log('findAll called');
    return await this.employeeService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_employee' })
  async findOne(@Payload() data: { id: number }) {
    console.log('findOne payload:', data);
    return await this.employeeService.findOne(data.id);
  }
  @MessagePattern({ cmd: 'update_employee' })
  async update(@Payload() data: { id: number, updateEmployeeDto: UpdateEmployeeDto }) {
    console.log('update payload:', data);
    return await this.employeeService.update(data.id, data.updateEmployeeDto);
  }

  @MessagePattern({ cmd: 'delete_employee' })
  async remove(@Payload() data: { id: number }) {
    console.log('remove payload:', data);
    return await this.employeeService.remove(data.id);
  }
}
