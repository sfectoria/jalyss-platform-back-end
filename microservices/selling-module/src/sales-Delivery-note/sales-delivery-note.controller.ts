import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesDeliveryNoteService } from './sales-delivery-note.service';
import { CreateSalesDeliveryNoteDto } from './dto/create-sales-delivery-note.dto';
import { UpdateSalesDeliveryNoteDto } from './dto/update-sales-delivery-notedto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Filters } from './entities/sales-bl.entity';

@Controller('sales-DeliveryNote')
export class SalesDeliveryNoteController {
  constructor(
    private readonly salesDeliveryNoteService: SalesDeliveryNoteService,
  ) {}

  @MessagePattern({ cmd: 'create_salesDeliveryNote' })
  async create(
    @Payload() createSalesDeliveryNoteDto: CreateSalesDeliveryNoteDto,
  ) {
    return await this.salesDeliveryNoteService.create(
      createSalesDeliveryNoteDto,
    );
  }

  @MessagePattern({ cmd: 'all_salesDeliveryNotes' })
  async findAll(@Payload() filters: Filters) {
    console.log('findAll called', filters);
    return await this.salesDeliveryNoteService.findAll(filters);
  }

  @MessagePattern({ cmd: 'getOne_salesDeliveryNote' })
  async findOne(@Payload('id') id: number) {
    return await this.salesDeliveryNoteService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_salesDeliveryNote' })
  async update(
    @Payload()
    data: {
      id: number;
      updateSalesDeliveryNoteDto: UpdateSalesDeliveryNoteDto;
    },
  ) {
    return await this.salesDeliveryNoteService.update(
      data.id,
      data.updateSalesDeliveryNoteDto,
    );
  }

  @MessagePattern({ cmd: 'delete_salesDeliveryNote' })
  async remove(@Payload() id: number) {
    return await this.salesDeliveryNoteService.remove(+id);
  }
}
