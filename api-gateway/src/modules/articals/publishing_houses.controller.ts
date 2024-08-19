import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { Createpublishing_housesDto } from './dto/create-publishing_houses.dto';
// import { Updatepublishing_housesDto } from './dto/update-publishing_houses.dto';
import { PublishingHousesService } from './publishing_houses.service';
import { CreatePublishingHouseDto } from './dto/create-artical.dto';
import { UpdatePublishingHouses } from './dto/update-artical.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('publishingHouses')
@Controller('publishingHouses')
export class PublishingHousesController {
  constructor(private readonly publishingHousesService: PublishingHousesService) {}
  
  @Post('create')
  create(@Body() createPublishingHouseDto: CreatePublishingHouseDto) {
    return this.publishingHousesService.create(createPublishingHouseDto);
  }

  @Get('all')
  findAll() {
    return this.publishingHousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.publishingHousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePublishingHouses: UpdatePublishingHouses) {
    return this.publishingHousesService.update(id,updatePublishingHouses);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.publishingHousesService.remove(+id);
  }
}
