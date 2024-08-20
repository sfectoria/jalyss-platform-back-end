import { Injectable } from '@nestjs/common';
import { CreatePurchaseInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseInvoiceDto } from './dto/update-purchase.dto';

@Injectable()
export class PurchaseInvoicesService {
  create(createPurchaseInvoiceDto: CreatePurchaseInvoiceDto) {
    return 'This action adds a new purchaseInvoice';
  }

  findAll() {
    return `This action returns all purchaseInvoices`;
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
