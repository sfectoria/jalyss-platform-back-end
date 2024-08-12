import { Injectable } from '@nestjs/common';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { PrismaService } from 'nestjs-prisma';
import { BonSortie } from 'src/helpers/bonSortie';

@Injectable()
export class SalesBlsService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: BonSortie,
  ) {}
  async create(createSalesBlDto: CreateSalesBlDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { bonSortieId, id_bon_commande, venteBonLivraison_lines, ...rest } =
        createSalesBlDto;

      if (!bonSortieId) {
        // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
        // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
        //eli houwa last +1 fi stock heka mouch fil kol

        const newExitNote = await this.helperExitNote.create(prisma, 'bl', {
          saleChannelId: createSalesBlDto.saleChannelId,
          exitNoteLines: createSalesBlDto.venteBonLivraison_lines,
          date: createSalesBlDto.delivery_date,
        });
        return await prisma.venteBonLivraison.create({
          data: {
            ...rest,
            delivery_date: new Date(rest.delivery_date).toISOString(),
            VenteBonLivraison_Line: {
              createMany: { data: createSalesBlDto.venteBonLivraison_lines },
            },
            bonSortieId: newExitNote.id,
          },
        });
      }
    });
  }

  async findAll() {
    return await this.prisma.venteBonLivraison.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteBonLivraison.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesBlDto: UpdateSalesBlDto) {
    return await this.prisma.venteBonLivraison.update({
      where: { id },
      data: updateSalesBlDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.venteBonLivraison.delete({ where: { id } });
  }
}
