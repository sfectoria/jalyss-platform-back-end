import { Injectable } from '@nestjs/common';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase-invoice.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase-invoice.dto';

@Injectable()
export class PurchaseInvoiceService {
  create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return 'This action adds a new purchaseInvoice';
  }

  findAll() {
    return `This action returns all purchaseInvoice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseInvoice`;
  }

  update(id: number, updatePurchaseInvoiceDto: UpdatePurchaseInvoiceDto) {
    return `This action updates a #${id} purchaseInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseInvoice`;
  }
}
