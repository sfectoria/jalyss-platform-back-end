import { Injectable } from '@nestjs/common';
import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesBlfsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createSalesBlfDto: CreateSalesBlfDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { bonSortieId, bonCommandeId, venteBLFacture_lines, ...rest } =
        createSalesBlfDto;

      if (!bonSortieId) {
        // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
        // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
        //eli houwa last +1 fi stock heka mouch fil kol
        const lastExitNoteOfStock = (
          await prisma.bonSortie.findMany({
            where: {
              Stock: {
                sales_channels: {
                  some: { id: createSalesBlfDto.sales_channelsId },
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
            sortie_date: new Date(createSalesBlfDto.deliveryDate).toISOString(),
            BonSortie_line: {
              createMany: {
                data: createSalesBlfDto.venteBLFacture_lines,
              },
            },
          },
        });
        bonSortieId = newExitNote.id;
      }
      return await prisma.venteBLFacture.create({
        data: {
          ...rest,
          deliveryDate: new Date(rest.deliveryDate).toISOString(),
          VenteBLFacture_Line: {
            createMany: { data: createSalesBlfDto.venteBLFacture_lines },
          },
          bonSortieId,
        },
      });
    });
  }

  async findAll() {
    return this.prisma.venteBLFacture.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteBLFacture.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesBlfDto: UpdateSalesBlfDto) {
    return await this.prisma.venteBLFacture.update({ where: { id }, data: updateSalesBlfDto });
  }

  async remove(id: number) {
    return await this.prisma.venteBLFacture.delete({ where: { id } });
  }
}
