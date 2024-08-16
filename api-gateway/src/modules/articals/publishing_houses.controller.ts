import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { Createpublishing_housesDto } from './dto/create-publishing_houses.dto';
// import { Updatepublishing_housesDto } from './dto/update-publishing_houses.dto';
import { PublishingHousesService } from './publishing_houses.service';
import { CreatePublishingHouseDto } from './dto/create-artical.dto';
import { UpdatePublishingHouses } from './dto/update-artical.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
@ApiTags('publishingHouses')
@ApiSecurity('apiKey')

@Controller('publishingHouses')
export class PublishingHousesController {
  constructor(private readonly publishingHousesService: PublishingHousesService) {}
  
  @Post('create')
  create(@Payload() createPublishingHouseDto: CreatePublishingHouseDto) {
    return this.publishingHousesService.create(createPublishingHouseDto);
  }

  @Get('all')
  findAll() {
    return this.publishingHousesService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.publishingHousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Payload() data : {id: number, updatePublishingHouses: UpdatePublishingHouses}) {
    return this.publishingHousesService.update(data.id, data.updatePublishingHouses);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.publishingHousesService.remove(+id);
  }
}
