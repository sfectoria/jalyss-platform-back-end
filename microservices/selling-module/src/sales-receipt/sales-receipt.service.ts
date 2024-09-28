import { Injectable } from '@nestjs/common';
import { CreateSalesReceiptDto } from './dto/create-sales-receipt.dto';
import { UpdateSalesReceiptDto } from './dto/update-sales-receipt.dto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNote } from 'src/helpers/exitNote';
import { Prisma } from '@prisma/client';

@Injectable()
export class SalesReceiptService {
  constructor(
    private readonly prisma: PrismaService,
    private helperExitNote: ExitNote,
  ) {} 
  async create(createSalesReceiptDto: CreateSalesReceiptDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let { exitNoteId, salesReceiptLine, ...rest } =
          createSalesReceiptDto;
          console.log("exitNOteID", exitNoteId)
          console.log('hello',createSalesReceiptDto.deliveryDate.toString());
          
        if (!exitNoteId) {
          const newExitNote = await this.helperExitNote.create(
            prisma,
            {
              saleChannelId: createSalesReceiptDto.salesChannelId,
              date:createSalesReceiptDto.deliveryDate.toString() ,
              exitNoteLines: salesReceiptLine,
              totalAmount:createSalesReceiptDto?.totalAmount
            },
          ); 
          console.log('newExitNote', newExitNote)
          exitNoteId = newExitNote.id;
        }
        return await prisma.salesReceipt.create({
          data: {
            ...rest,
            salesReceiptLine: {
              createMany: { data: salesReceiptLine },
            },
            exitNoteId
          },
        });
      },
    );
  }

 async findAll() {
    let data = await this.prisma.salesReceipt.findMany();
    let count = await this.prisma.salesReceipt.count()
    return {data,count}
  }

  async findOne(id: number) {
    return await this.prisma.salesReceipt.findUnique({where:{id}});
  }

  async update(id: number, updateSalesReceiptDto: UpdateSalesReceiptDto) {
    return `This action updates a #${id} salesReceipt`;
  }

  async remove(id: number) {
    return `This action removes a #${id} salesReceipt`;
  }
}
