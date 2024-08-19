import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesDeliveryInvoiceService } from './sales-delivery-invoice.service';
import { CreateSalesDeliveryInvoiceDto } from './dto/create-sales-delivery-invoice.dto';
import { UpdateSalesDeliveryInvoiceDto } from './dto/update-sales-delivery-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('sales-DeliveryInvoice')
export class SalesDeliveryInvoiceController {
  constructor(private readonly salesDeliveryInvoiceService: SalesDeliveryInvoiceService) {}

  @MessagePattern({cmd : 'create_salesDeliveryInvoice'})
  async create(@Payload() createSalesDeliveryInvoiceDto: CreateSalesDeliveryInvoiceDto) {
    return await this.salesDeliveryInvoiceService.create(createSalesDeliveryInvoiceDto);
  }

  @MessagePattern({cmd :'all_salesDeliveryInvoices'})
  async findAll() {
    return await this.salesDeliveryInvoiceService.findAll();
  }

  @MessagePattern({cmd :'getOne_salesDeliveryInvoice'})
  async findOne(@Payload() data :{id : number}) {
    return await this.salesDeliveryInvoiceService.findOne(data.id);
  }

  @MessagePattern({cmd : 'update_salesDeliveryInvoice'})
  async update(@Payload() data :{ id: number, updateSalesDeliveryInvoiceDto: UpdateSalesDeliveryInvoiceDto}) {
    return await this.salesDeliveryInvoiceService.update(data.id, data.updateSalesDeliveryInvoiceDto);
  }

  @MessagePattern({cmd :'delete_salesDeliveryInvoice'})
  async remove(@Payload() data : { id: number}) {
    return await this.salesDeliveryInvoiceService.remove(data.id);
  }
}
