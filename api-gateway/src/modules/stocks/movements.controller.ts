import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
  } from '@nestjs/common';
  import { CreateMovementsDto } from '../stocks/dto/create-stock.dto';
  import { UpdateReceiptNoteDto } from '../stocks/dto/update-stock.dto';
  import { ApiTags } from '@nestjs/swagger';
  import { FiltersMovement } from './entities/stock.entity';
import { MovementsService } from './movements.service';
  
@Controller('movements')
@ApiTags('movements')
  export class MovementsController {
    constructor(private readonly movements: MovementsService) {}
  
    // @Post('create_rn')
    // create(@Body() createMovementsDto: CreateMovementsDto) {
    //   return this.movements.create(createMovementsDto)
    // }
  
    @Get('getAll')
    findAll(@Query() filters?:FiltersMovement) {
      return this.movements.findAll(filters);
    }

    @Get('getAll2')
    findAll2(@Query() filters?:FiltersMovement) {
      return this.movements.findAll2(filters);
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      console.log('hi', id);
  
      return this.movements.findOne(+id);
    }
  
    // @Patch(':id')
    // update(
    //   @Param('id') id: number,
    //   @Body() updateReceiptNoteDto: UpdateReceiptNoteDto,
    // ) {
    //   return this.receiptNoteService.update(id, updateReceiptNoteDto);
    // }
  
    // @Delete(':id')
    // remove(@Param('id') id: number) {
    //   console.log('give me the id ', id);
  
    //   return this.receiptNoteService.remove(+id);
    // }
  }
  