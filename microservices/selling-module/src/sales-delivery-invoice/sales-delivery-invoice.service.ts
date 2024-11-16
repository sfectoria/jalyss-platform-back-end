import { Injectable } from '@nestjs/common';
import { CreateSalesDeliveryInvoiceDto } from './dto/create-sales-delivery-invoice.dto';
import { UpdateSalesDeliveryInvoiceDto } from './dto/update-sales-delivery-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNote } from 'src/helpers/exitNote';
import { Filters } from './entities/sales-delivery-invoice.entity';

@Injectable() //vente bon de livraison facture
export class SalesDeliveryInvoiceService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: ExitNote,
  ) {}
  async create(createSalesDeliveryInvoiceDto: CreateSalesDeliveryInvoiceDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { exitNoteId, salesDeliveryInvoicelines, ...rest } =
        createSalesDeliveryInvoiceDto;
      console.log('DEL', createSalesDeliveryInvoiceDto.deliveryDate);

      if (!exitNoteId) {
        console.log(createSalesDeliveryInvoiceDto.idClient,"ttttt");
        
        const newExitNote = await this.helperExitNote.create(prisma, {
          saleChannelId: createSalesDeliveryInvoiceDto.salesChannelsId,
          exitNoteLines: salesDeliveryInvoicelines,
          idClient:createSalesDeliveryInvoiceDto.idClient,
          date: createSalesDeliveryInvoiceDto.deliveryDate,
          totalAmount: createSalesDeliveryInvoiceDto?.totalAmount,
            paymentStatus: createSalesDeliveryInvoiceDto?.paymentStatus,
            paymentType: createSalesDeliveryInvoiceDto?.paymentType,
            discount: createSalesDeliveryInvoiceDto?.discount,
            tax: createSalesDeliveryInvoiceDto?.tax,
            modified: createSalesDeliveryInvoiceDto?.modified,
            subTotalAmount: createSalesDeliveryInvoiceDto?.subTotalAmount,
            payedAmount: createSalesDeliveryInvoiceDto?.payedAmount,
            restedAmount: createSalesDeliveryInvoiceDto?.restedAmount,
        });
        return await prisma.salesDeliveryInvoice.create({
          data: {
            ...rest,
            deliveryDate: new Date(rest.deliveryDate).toISOString(),
            salesDeliveryInvoiceLine: {
              createMany: {
                data: createSalesDeliveryInvoiceDto.salesDeliveryInvoicelines,
              },
            },
            exitNoteId: newExitNote.id,
          },
        });
      }
    });
  }

  async findAll(filters: Filters) {
    let { take, skip, clientIds } = filters;
    console.log('THIS', take, skip);

    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;

    let where = {};
    console.log('clientIds', typeof clientIds);

    if (Array.isArray(clientIds) && clientIds.length > 0) {
      console.log('clientIds', clientIds);
      where['idClient'] = {
        in: clientIds.map((elem) => +elem), // Convertir chaque élément en nombre
      };
    }

    return await this.prisma.salesDeliveryInvoice.findMany({
      where,
      take,
      skip,
      include: {
        client: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.salesDeliveryInvoice.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateSalesDeliveryInvoiceDto: UpdateSalesDeliveryInvoiceDto,
  ) {
    const { salesDeliveryInvoicelines, ...rest } = updateSalesDeliveryInvoiceDto;
    return await this.prisma.salesDeliveryInvoice.update({
      where: { id },
      data: {
        ...rest,
        salesDeliveryInvoiceLine: {
          updateMany: salesDeliveryInvoicelines?.map((line) => ({
            where: {
              articleId: line.articleId,
            },
            data: {
              quantity: line.quantity,
            },
          })),
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.salesDeliveryInvoice.delete({ where: { id } });
  }
}
