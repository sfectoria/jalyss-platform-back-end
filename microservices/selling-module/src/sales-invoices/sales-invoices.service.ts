import { Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
import { BonSortie } from 'src/helpers/bonSortie';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalesInvoicesService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: BonSortie,
  ) {}
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        const { bonSortieId, id_bon_commande, venteFacture_lines, ...rest } =
          createSalesInvoiceDto;
        if (!bonSortieId) {
          // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
          // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
          //eli houwa last +1 fi stock heka mouch fil kol

          const newExitNote = await this.helperExitNote.create(
            prisma,
            'invoice',
            {
              saleChannelId: createSalesInvoiceDto.saleChannelId,
              date: createSalesInvoiceDto.date,
              exitNoteLines: createSalesInvoiceDto.venteFacture_lines,
            },
          ); //

          return await prisma.venteFacture.create({
            data: {
              ...rest,
              date: new Date(rest.date).toISOString(),
              venteFacture_line: {
                createMany: { data: createSalesInvoiceDto.venteFacture_lines },
              },
              bonSortieId: newExitNote.id,
            },
          });
        }
      },
    );
  }

  async findAll() {
    return await this.prisma.venteFacture.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteFacture.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto) {
    return await this.prisma.venteFacture.update({
      where: { id },
      data: updateSalesInvoiceDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.venteFacture.delete({ where: { id } });
  }
}
