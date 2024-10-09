import { Injectable } from '@nestjs/common';
import { CreateSalesDeliveryNoteDto } from './dto/create-sales-delivery-note.dto';
import { UpdateSalesDeliveryNoteDto } from './dto/update-sales-delivery-notedto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNote } from 'src/helpers/exitNote';
import { Filters } from './entities/sales-bl.entity';

@Injectable()
export class SalesDeliveryNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: ExitNote,
  ) {}
  async create(createSalesDeliveryNoteDto: CreateSalesDeliveryNoteDto) {
    return await this.prisma.$transaction(async (prisma) => {
      let { exitNoteId, salesDeliveryNoteLine, ...rest } =
        createSalesDeliveryNoteDto;

      if (!exitNoteId) {
        const newExitNote = await this.helperExitNote.create(prisma, {
          saleChannelId: createSalesDeliveryNoteDto.saleChannelId,
          exitNoteLines: createSalesDeliveryNoteDto.salesDeliveryNoteLine,
          date: createSalesDeliveryNoteDto.deliveryDate,
          totalAmount: createSalesDeliveryNoteDto?.totalAmount,
          paymentStatus: createSalesDeliveryNoteDto?.paymentStatus,
          paymentType: createSalesDeliveryNoteDto?.paymentType,
          discount: createSalesDeliveryNoteDto?.discount,
          tax: createSalesDeliveryNoteDto?.tax,
          modified: createSalesDeliveryNoteDto?.modified,
          subTotalAmount: createSalesDeliveryNoteDto?.subTotalAmount,
          payedAmount: createSalesDeliveryNoteDto?.payedAmount,
          restedAmount: createSalesDeliveryNoteDto?.restedAmount,
        });
        console.log('test now ', createSalesDeliveryNoteDto);

        return await prisma.salesDeliveryNote.create({
          data: {
            ...rest,
            deliveryDate: new Date(rest.deliveryDate).toISOString(),
            salesDeliveryNoteLine: {
              createMany: {
                data: createSalesDeliveryNoteDto.salesDeliveryNoteLine,
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

    if (Array.isArray(clientIds) && clientIds.length > 0) {
      where['idClient'] = {
        in: clientIds.map((elem) => +elem), // Convertir chaque élément en nombre
      };
    }

    return await this.prisma.salesDeliveryNote.findMany({
      where,
      take,
      skip,
      include: {
        salesDeliveryNoteLine: true,
        client: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.salesDeliveryNote.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateSalesDeliveryNoteDto: UpdateSalesDeliveryNoteDto,
  ) {
    const { salesDeliveryNoteLine, ...rest } = updateSalesDeliveryNoteDto;
    return await this.prisma.salesDeliveryNote.update({
      where: { id },
      data: {
        ...rest,
        salesDeliveryNoteLine: {
          updateMany: salesDeliveryNoteLine?.map((line) => ({
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
    return await this.prisma.salesDeliveryNote.delete({ where: { id } });
  }
}
