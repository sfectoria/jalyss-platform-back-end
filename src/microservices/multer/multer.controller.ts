import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MulterService } from './multer.service';
import { CreateMulterDto } from './dto/create-multer.dto';
import { UpdateMulterDto } from './dto/update-multer.dto';

@Controller()
export class MulterController {
  constructor(private readonly multerService: MulterService) {}

  @MessagePattern('createMulter')
  create(@Payload() createMulterDto: CreateMulterDto) {
    return this.multerService.create(createMulterDto);
  }

  @MessagePattern('findAllMulter')
  findAll() {
    return this.multerService.findAll();
  }

  @MessagePattern('findOneMulter')
  findOne(@Payload() id: number) {
    return this.multerService.findOne(id);
  }

  @MessagePattern('updateMulter')
  update(@Payload() updateMulterDto: UpdateMulterDto) {
    return this.multerService.update(updateMulterDto.id, updateMulterDto);
  }

  @MessagePattern('removeMulter')
  remove(@Payload() id: number) {
    return this.multerService.remove(id);
  }
}
