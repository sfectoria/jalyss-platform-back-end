import { Injectable } from '@nestjs/common';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesBlsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createSalesBlDto: CreateSalesBlDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { bonSortieId, id_bon_commande, venteBonLivraison_lines, ...rest } =
        createSalesBlDto;

      if (!bonSortieId) {
        // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
        // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
        //eli houwa last +1 fi stock heka mouch fil kol
        const lastExitNoteOfStock = (
          await prisma.bonSortie.findMany({
            where: {
              Stock: {
                sales_channels: {
                  some: { id: createSalesBlDto.saleChannelId },
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
            sortie_date: new Date(createSalesBlDto.delivery_date).toISOString(),
            BonSortie_line: {
              createMany: {
                data: createSalesBlDto.venteBonLivraison_lines,
              },
            },
          },
        });
        bonSortieId = newExitNote.id;
      }
      return await prisma.venteBonLivraison.create({
        data: {
          ...rest,
          delivery_date: new Date(rest.delivery_date).toISOString(),
          VenteBonLivraison_Line: {
            createMany: { data: createSalesBlDto.venteBonLivraison_lines },
          },
          bonSortieId,
        },
      });
    });
  }

  async findAll() {
    return await this.prisma.venteBonLivraison.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteBonLivraison.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesBlDto: UpdateSalesBlDto) {
    return await this.prisma.venteBonLivraison.update({ where: { id }, data: updateSalesBlDto });
  }

  async remove(id: number) {
    return await this.prisma.venteBonLivraison.delete({ where: { id } });
  }
}
