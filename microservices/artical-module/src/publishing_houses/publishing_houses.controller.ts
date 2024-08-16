import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PublishingHousesService } from './publishing_houses.service';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';
// import { PublishingHousesService } from './publishing-houses.service';
// import { CreatePublishingHouseDto } from './dto/create-publishing-house.dto';
// import { UpdatePublishingHouseDto } from './dto/update-publishing-house.dto';

@Controller()
export class PublishingHousesController {
  constructor(private readonly publishingHousesService: PublishingHousesService) {}

  @MessagePattern({ cmd: 'create_publishingHouse' })
  async create(@Payload() createPublishingHouseDto: CreatePublishingHouseDto) {
    return this.publishingHousesService.create(createPublishingHouseDto);
  }

  @MessagePattern({ cmd: 'all_publishingHouses' })
  async findAll() {
    return this.publishingHousesService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_publishingHouse' })
  async findOne(@Payload() data: { id: number }) {
    return this.publishingHousesService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_publishingHouse' })
  async update(@Payload() data: { id: number, updatePublishingHouseDto: UpdatePublishingHouseDto }) {
    return this.publishingHousesService.update(data.id, data.updatePublishingHouseDto);
  }

  @MessagePattern({ cmd: 'delete_publishingHouse' })
  async remove(@Payload() data: { id: number }) {
    return this.publishingHousesService.remove(data.id);
  }
}
