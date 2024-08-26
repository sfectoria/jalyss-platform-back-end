import { Injectable } from '@nestjs/common';
import { CreateSalesDeliveryNoteDto } from './dto/create-sales-delivery-note.dto';
import { UpdateSalesDeliveryNoteDto } from './dto/update-sales-delivery-notedto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNote } from 'src/helpers/exitNote';

@Injectable()
export class SalesDeliveryNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: ExitNote,
  ) {}
  async create(createSalesDeliveryNoteDto: CreateSalesDeliveryNoteDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { exitNoteId, idPurchaseOrder, salesDeliveryNoteLine, ...rest } =
        createSalesDeliveryNoteDto;

      if (!exitNoteId) {
        // kif nji nasna3 bon de sorti lazemni naaref stockId 3lech
        // 3la khater kif nasnaa bon sorti lazem aandha num te3ha
        //eli houwa last +1 fi stock heka mouch fil kol

        const newExitNote = await this.helperExitNote.create(prisma, {
          saleChannelId: createSalesDeliveryNoteDto.saleChannelId,
          exitNoteLines: createSalesDeliveryNoteDto.salesDeliveryNoteLine,
          date: createSalesDeliveryNoteDto.deliveryDate,
        });
        return await prisma.salesDeliveryNote.create({
          data: {
            ...rest,
            deliveryDate: new Date(rest.deliveryDate).toISOString(),
            salesDeliveryNoteLine: {
              createMany: { data: createSalesDeliveryNoteDto.salesDeliveryNoteLine },
            },
            exitNoteId: newExitNote.id,
          },
        });
      }
    });
  }

  async findAll() {
    return await this.prisma.salesDeliveryNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.salesDeliveryNote.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesDeliveryNoteDto: UpdateSalesDeliveryNoteDto) {
    const { salesDeliveryNoteLine, ...rest } = updateSalesDeliveryNoteDto
    return await this.prisma.receiptNote.update({
      where: { id },
      data:
      {
        ...rest,
        receiptNoteLine:
        {
          updateMany: salesDeliveryNoteLine.map(line => ({
            where: {
              idArticle: line.articleId,
              receiptNoteId: id,
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
    return await this.prisma.salesDeliveryNote.delete({ where: { id } });
  }
}
