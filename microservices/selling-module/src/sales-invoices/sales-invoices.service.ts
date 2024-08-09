import { Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesInvoicesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.prisma.$transaction(async (prisma) => {
      const { bonSortieId, id_bon_commande, venteFacture_lines, ...rest } =
        createSalesInvoiceDto;
      if (!bonSortieId) {
        // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
        // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
        //eli houwa last +1 fi stock heka mouch fil kol
        const lastExitNoteOfStock = (
          await prisma.bonSortie.findMany({
            where: {
              Stock: {
                sales_channels: {
                  some: { id: createSalesInvoiceDto.saleChannelId },
                },
              },
            },
            take: 1,
            orderBy: {
              num_bonSortie: 'desc',
            },
          })
        )[0];
        const newExitNote = await prisma.bonSortie.create({
          data: {
            num_bonSortie: lastExitNoteOfStock.num_bonSortie,
            stockId: 5,
            sortie_date: new Date(createSalesInvoiceDto.date).toISOString(),
            BonSortie_line: {
              createMany: {
                data: createSalesInvoiceDto.venteFacture_lines,
              },
            },
          },
        });

        await prisma.venteFacture.create({
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
    });
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
