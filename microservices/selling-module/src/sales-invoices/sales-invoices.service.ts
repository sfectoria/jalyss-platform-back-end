import { Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNote } from 'src/helpers/exitNote';
import {  Prisma } from '@prisma/client';

@Injectable()
export class SalesInvoicesService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: ExitNote,
  ) {} 
  //creation dune facture de vente
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let { exitNoteId, idPurchaseOrder, salesInvoiceLine, ...rest } =
          createSalesInvoiceDto;
          console.log("exitNOteID", exitNoteId)
        if (!exitNoteId) {
          // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
          // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
          //eli houwa last +1 fi stock heka mouch fil kol

          const newExitNote = await this.helperExitNote.create(
            prisma,
            // 'invoice',
            {
              saleChannelId: createSalesInvoiceDto.saleChannelId,
              date: createSalesInvoiceDto.date,
              exitNoteLines: salesInvoiceLine,
            },
          ); //
          console.log('newExitNote', newExitNote)
          exitNoteId = newExitNote.id;
        }
        return await prisma.salesInvoice.create({
          data: {
            ...rest,
            date: new Date(rest.date).toISOString(),
            salesInvoiceLine: {
              createMany: { data: salesInvoiceLine },
            },
            exitNoteId
          },
        });
      },
    );
  }

  async findAll() {
    return await this.prisma.salesInvoice.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.salesInvoice.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto) {
    const { salesInvoiceLine, ...rest } = updateSalesInvoiceDto
    return await this.prisma.salesInvoice.update({
      where: { id },
      data:
      {
        ...rest,
        salesInvoiceLine:
        {
          updateMany: salesInvoiceLine.map(line => ({
            where: {
              articalId: line.articalId,
              salesInvoiceId: id
            },
            data: {
              quantity: line.quantity,
            },
          }))
        },
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.salesInvoice.delete({ where: { id } });
  }
}
