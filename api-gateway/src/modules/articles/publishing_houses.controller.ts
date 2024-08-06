import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { Createpublishing_housesDto } from './dto/create-publishing_houses.dto';
// import { Updatepublishing_housesDto } from './dto/update-publishing_houses.dto';
import { publishing_housesService } from './publishing_houses.service';
import { Createpublishing_housesDto } from './dto/create-article.dto';
import { updatepublishing_houses } from './dto/update-article.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
@ApiTags('publishingHouses')
@ApiSecurity('apiKey')

@Controller('publishingHouses')
export class PublishingHousesController {
  constructor(private readonly PublishingHousesService: publishing_housesService) {}
  
  @Post()
  create(@Body() createpublishing_housesDto: Createpublishing_housesDto) {
    return this.PublishingHousesService.create(createpublishing_housesDto);
  }

  @Get()
  findAll() {
    return this.PublishingHousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PublishingHousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatepublishing_housesDto: updatepublishing_houses) {
    return this.PublishingHousesService.update(+id, updatepublishing_housesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.PublishingHousesService.remove(+id);
  }
}
