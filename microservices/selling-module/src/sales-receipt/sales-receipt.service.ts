import { Injectable } from '@nestjs/common';
import { CreateSalesReceiptDto } from './dto/create-sales-receipt.dto';
import { UpdateSalesReceiptDto } from './dto/update-sales-receipt.dto';

@Injectable()
export class SalesReceiptService {
  create(createSalesReceiptDto: CreateSalesReceiptDto) {
    return 'This action adds a new salesReceipt';
  }

  findAll() {
    return `This action returns all salesReceipt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesReceipt`;
  }

  update(id: number, updateSalesReceiptDto: UpdateSalesReceiptDto) {
    return `This action updates a #${id} salesReceipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesReceipt`;
  }
}
