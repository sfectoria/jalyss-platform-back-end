import { Injectable } from '@nestjs/common';
import { CreateSalesReceiptDto } from './dto/create-sales-receipt.dto';
import { UpdateSalesReceiptDto } from './dto/update-sales-receipt.dto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNote } from 'src/helpers/exitNote';
import { Prisma } from '@prisma/client';
import { Filters } from './entities/sales-receipt.entity';

@Injectable()
export class SalesReceiptService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: ExitNote,
  ) {}
  async create(createSalesReceiptDto: CreateSalesReceiptDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let { exitNoteId, salesReceiptLine, ...rest } = createSalesReceiptDto;
        console.log('exitNOteID', exitNoteId);

        if (!exitNoteId) {
          const newExitNote = await this.helperExitNote.create(prisma, {
            saleChannelId: createSalesReceiptDto.salesChannelId,
            date: createSalesReceiptDto?.deliveryDate?.toString(),
            exitNoteLines: salesReceiptLine,
            totalAmount: createSalesReceiptDto?.totalAmount,
            paymentStatus: createSalesReceiptDto?.paymentStatus,
            paymentType: createSalesReceiptDto?.paymentType,
            discount: createSalesReceiptDto?.discount,
            tax: createSalesReceiptDto?.tax,
            modified: createSalesReceiptDto?.modified,
            subTotalAmount: createSalesReceiptDto?.subTotalAmount,
            payedAmount: createSalesReceiptDto?.payedAmount,
            restedAmount: createSalesReceiptDto?.restedAmount,
          });
          console.log('newExitNote', newExitNote);
          exitNoteId = newExitNote.id;
        }
        return await prisma.salesReceipt.create({
          data: {
            ...rest,
            salesReceiptLine: {
              createMany: { data: salesReceiptLine },
            },
            exitNoteId,
          },
        });
      },
    );
  }

  async findAll(filters?: Filters) {
    console.log(filters,'log');
    
    let { take, skip, clientIds, salesChannelsIds } = filters;

    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;

    let where = {}
    if (clientIds) {
      where['idClient'] = { in: clientIds.map((e) => +e) };
    }
    if (salesChannelsIds) {
      where['salesChannelId'] = { in: salesChannelsIds.map((e) => +e) };
    }

    let data = await this.prisma.salesReceipt.findMany({where,take,skip,orderBy:{deliveryDate:'desc'}});
    let count = await this.prisma.salesReceipt.count(where);
    return { data, count };
  }

  async findOne(id: number) {
    return await this.prisma.salesReceipt.findUnique({ where: { id } });
  }

  async update(id: number, updateSalesReceiptDto: UpdateSalesReceiptDto) {
    return `This action updates a #${id} salesReceipt`;
  }

  async remove(id: number) {
    return `This action removes a #${id} salesReceipt`;
  }
}
