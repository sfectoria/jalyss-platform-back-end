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
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        const { exitNoteId, idPurchaseOrder, salesInvoicelines, ...rest } =
          createSalesInvoiceDto;
        if (!exitNoteId) {
          // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
          // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
          //eli houwa last +1 fi stock heka mouch fil kol

          const newExitNote = await this.helperExitNote.create(
            prisma,
            'invoice',
            {
              saleChannelId: createSalesInvoiceDto.saleChannelId,
              date: createSalesInvoiceDto.date,
              exitNoteLines: createSalesInvoiceDto.salesInvoicelines,
            },
          ); //

          return await prisma.salesInvoice.create({
            data: {
              ...rest,
              date: new Date(rest.date).toISOString(),
              salesInvoiceLine: {
                createMany: { data: createSalesInvoiceDto.salesInvoicelines },
              },
              exitNoteId: newExitNote.id,
            },
          });
        }
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
    return await this.prisma.salesInvoice.update({
      where: { id },
      data: updateSalesInvoiceDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.salesInvoice.delete({ where: { id } });
  }
}
