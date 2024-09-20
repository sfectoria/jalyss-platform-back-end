import { Controller,  } from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FiltersMovement } from './entities/movement.entity';

@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  // @MessagePattern({ cmd: 'create_exitNote' })
  // create(@Body() createMovementDto: CreateMovementDto) {
  //   return this.movementsService.create(createMovementDto);
  // }

  @MessagePattern({ cmd: 'all_movements' })
  async findAll(filters?:FiltersMovement) {
    return this.movementsService.findAll(filters);
  }

  @MessagePattern({ cmd: 'one_movement' })
  findOne(@Payload() id: number) {
    return this.movementsService.findOne(+id);
  }

  @MessagePattern({ cmd: 'all_movements2' })
  async findAll2(filters?:FiltersMovement) {
    return this.movementsService.findAll2(filters);
  }
  // @MessagePattern({ cmd: 'create_exitNote' })
  // update(@Param('id') id: string, @Body() updateMovementDto: UpdateMovementDto) {
  //   return this.movementsService.update(+id, updateMovementDto);
  // }

  // @MessagePattern({ cmd: 'remove' })
  // remove(@Param('id') id: string) {
  //   return this.movementsService.remove(+id);
  // }
}
