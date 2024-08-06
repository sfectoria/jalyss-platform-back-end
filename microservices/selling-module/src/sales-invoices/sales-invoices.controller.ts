import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesInvoicesService } from './sales-invoices.service';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('sales-invoices')
export class SalesInvoicesController {
  constructor(private readonly salesInvoicesService: SalesInvoicesService) {}

  @MessagePattern({ cmd: 'create salesInvioce'})
  async create(@Payload() createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.salesInvoicesService.create(createSalesInvoiceDto);
  }

  @MessagePattern({ cmd: 'all_salesInvoice'})
  async findAll() {
    return await this.salesInvoicesService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_salesInvoice'})
  async findOne(@Payload() data : {id: number}) {
    return await this.salesInvoicesService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'update_salesInvoice'})
  async update(@Payload() data :{ id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto}) {
    return await this.salesInvoicesService.update(data.id, data.updateSalesInvoiceDto);
  }

  @MessagePattern({ cmd: 'delete_salesInvoice'})
  async remove(@Payload() data: {id: number}) {
    return await this.salesInvoicesService.remove(data.id);
  }
}