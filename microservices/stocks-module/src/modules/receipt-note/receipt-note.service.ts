import { Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-receipt-note.dto';
import { UpdateReceiptNoteDto } from './dto/update-receipt-note.dto';
import { PrismaService } from 'nestjs-prisma';
import { FiltersReceipt } from './entities/receipt-note.entity';

@Injectable()
export class ReceiptNoteService {
  constructor(private readonly prisma: PrismaService) {}
  // async create(createReceiptNoteDto: CreateReceiptNoteDto) {
  //   const { lines, ...rest } = createReceiptNoteDto
  //   return await this.prisma.receiptNote.create(
  //     {
  //       data:
  //       {
  //         ...rest,
  //         receiptNoteLine:
  //         {
  //           createMany: { data: lines}
  //         }
  //       }
  //     }
  //   );
  // }
  async create(createReceiptNoteDto: CreateReceiptNoteDto) {
    let { lines, numReceiptNote, ...rest } = createReceiptNoteDto;
    const lastReceiptOfStock = await this.prisma.receiptNote.findMany({
      where: { idStock: createReceiptNoteDto.idStock },
      take: 1,
      orderBy: {
        numReceiptNote: 'desc',
      },
    });
    console.log(numReceiptNote, 'numReceiptNote');
    if (lastReceiptOfStock.length == 0) {
      numReceiptNote = 1;
    } else numReceiptNote = lastReceiptOfStock[0].numReceiptNote + 1;
    return await this.prisma.receiptNote.create({
      data: {
        ...rest,
        numReceiptNote,
        receiptNoteLine: {
          createMany: { data: lines },
        },
      },
    });
  }

  async findAll(filters:FiltersReceipt) {
    let {take,skip,stocksIds}=filters
    let where = {};
    if(stocksIds){
      console.log('stocksIds',stocksIds);
      
    where["idStock"]={
      in:stocksIds.map((e)=> +e)
    }
  }
    return await this.prisma.receiptNote.findMany({
     where,
      include: {
        receiptNoteLine: { include: { Article: {include:{cover:true}} } },
        stock: true,
        provider: true,
        transferNote: true,
        purchaseDeliveryInvoice: true,
        purchaseDeliveryNote: true,
        purchaseInvoice: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.receiptNote.findUnique({
      where: { id },
      include: { receiptNoteLine: { include: { Article: true } }, stock: true },
    });
  }

  async update(id: number, updatereceiptNoteDto: UpdateReceiptNoteDto) {
    const { lines, ...rest } = updatereceiptNoteDto;
    return await this.prisma.receiptNote.update({
      where: { id },
      data: {
        ...rest,
        receiptNoteLine: {
          updateMany: lines.map((line) => ({
            where: {
              idArticle: line.idArticle,
              receiptNoteId: id,
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
    return await this.prisma.receiptNote.delete({
      where: { id },
      include: { receiptNoteLine: { include: { Article: true } }, stock: true },
    });
  }
}
