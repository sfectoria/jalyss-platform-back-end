import { Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryInvoiceDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDeliveryInvoiceDto } from './dto/update-purchase.dto';

@Injectable()
export class PurchaseDeliveryInvoicesService {
  create(createPurchaseDeliveryInvoiceDto: CreatePurchaseDeliveryInvoiceDto) {
    return 'This action adds a new purchaseDeliveryInvoice';
  }

  findAll() {
    return `This action returns all purchaseDeliveryInvoices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseDeliveryInvoice`;
  }

  update(id: number, updatePurchaseDeliveryInvoiceDto: UpdatePurchaseDeliveryInvoiceDto) {
    return `This action updates a #${id} purchaseDeliveryInvoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseDeliveryInvoice`;
  }
}
