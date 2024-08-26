import { Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-receipt-note.dto';
import { UpdateReceiptNoteDto } from './dto/update-receipt-note.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReceiptNoteService {
  constructor(private readonly prisma: PrismaService) { }
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
    let { lines, numReceiptNote, ...rest } = createReceiptNoteDto
    const lastReceiptOfStock = await this.prisma.receiptNote.findMany({
      where: { idStock: createReceiptNoteDto.idStock },
      take: 1,
      orderBy: {
        numReceiptNote: 'desc',
      },     
    });
    console.log(numReceiptNote,'numReceiptNote');
    if (lastReceiptOfStock.length == 0){
      numReceiptNote = 1
    }
    else numReceiptNote=lastReceiptOfStock[0].numReceiptNote+1
    return await this.prisma.receiptNote.create({
      data : 
      {
        ...rest,
        numReceiptNote,
        receiptNoteLine :  
        {
          createMany : { data : lines }
        }
      }
    });
  }

  async findAll() {
    return await this.prisma.receiptNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.receiptNote.findUnique({
      where: { id },
      include: { receiptNoteLine: { include: { Article: true } }, stock: true },
    });
  }

  async update(id: number, updatereceiptNoteDto: UpdateReceiptNoteDto) {
    const { lines, ...rest } = updatereceiptNoteDto
    return await this.prisma.receiptNote.update({
      where: { id },
      data:
      {
        ...rest,
        receiptNoteLine:
        {
          updateMany: lines.map(line => ({
            where: {
              idArticle: line.idArticle,
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
    return await this.prisma.receiptNote.delete({
      where: { id },
      include: { receiptNoteLine: { include: { Article: true } }, stock: true },
    })
  }
}
