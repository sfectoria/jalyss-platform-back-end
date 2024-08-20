import { Injectable } from '@nestjs/common';
import { CreateSalesDeliveryInvoiceDto } from './dto/create-sales-delivery-invoice.dto';
import { UpdateSalesDeliveryInvoiceDto } from './dto/update-sales-delivery-invoice.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable() //vente bon de livraison facture
export class SalesDeliveryInvoiceService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createSalesDeliveryInvoiceDto: CreateSalesDeliveryInvoiceDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { exitNoteId, purchaseOrderId, salesDeliveryInvoicelines, ...rest } =
        createSalesDeliveryInvoiceDto;

      if (!exitNoteId) {
        // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
        // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
        //eli houwa last +1 fi stock heka mouch fil kol
        const lastExitNoteOfStock = (
          await prisma.exitNote.findMany({
            where: {
              stock: {
                salesChannels: {
                  some: { id: createSalesDeliveryInvoiceDto.salesChannelsId },
                },
              },
            },
            take: 1,
            orderBy: {
              numExitNote: 'desc',
            },
          })
        )[0];
        const newExitNote = await prisma.exitNote.create({
          data: {
            numExitNote: lastExitNoteOfStock.numExitNote,
            stockId: 5,
            exitDate: new Date(createSalesDeliveryInvoiceDto.deliveryDate).toISOString(),
            exitNoteLine: {
              createMany: {
                data: createSalesDeliveryInvoiceDto.salesDeliveryInvoicelines,
              },
            },
          },
        });
        exitNoteId = newExitNote.id;
      }
      return await prisma.salesDeliveryInvoice.create({
        data: {
          ...rest,
          deliveryDate: new Date(rest.deliveryDate).toISOString(),
          salesDeliveryInvoiceLine: {
            createMany: { data: createSalesDeliveryInvoiceDto.salesDeliveryInvoicelines },
          },
          exitNoteId,
        },
      });
    });
  }

  async findAll() {
    return this.prisma.salesDeliveryInvoice.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.salesDeliveryInvoice.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesDeliveryInvoiceDto: UpdateSalesDeliveryInvoiceDto) {
    return await this.prisma.salesDeliveryInvoice.update({ where: { id }, data: updateSalesDeliveryInvoiceDto });
  }

  async remove(id: number) {
    return await this.prisma.salesDeliveryInvoice.delete({ where: { id } });
  }
}
