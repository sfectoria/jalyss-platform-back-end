import { Injectable } from '@nestjs/common';
import { CreateReturnNoteDto } from './dto/create-return-note.dto';
import {  UpdateReturnNoteDto } from './dto/update-return-note.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { ReceiptNoteHelper } from 'src/helpers/ExitAndReceiptNote';

@Injectable()
export class ReturnNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote:ReceiptNoteHelper
  ) { }
  async create(createReturnNoteDto: CreateReturnNoteDto) {
    return await this.prisma.$transaction(
      async(prisma : Prisma.TransactionClient) => {
        let { lines,idStock,receiptNoteId, ...rest } = createReturnNoteDto
        if(!receiptNoteId){
          const newReceiptNote=await this.helperReceiptNote.create(
            prisma,
            {
              idStock:idStock,
              typeReceipt:"retour",
              date:new Date,
              receiptNoteLines:lines
            }
          )
          receiptNoteId=newReceiptNote.id
        }
        return await prisma.returnNote.create({
          data:
          {
            ...rest,
            receiptNoteId,
            returnNoteLine:
            {
              createMany: { data: lines }
            }
          }
        });
      }
    )
   
    
  }

  async findAll() {
    return await this.prisma.returnNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.returnNote.findUnique({ 
      where: { id },
      include: {returnNoteLine: { include: { article: true } }}
       });
  }

  async update(id: number, updateReturnNoteDto: UpdateReturnNoteDto) {
    const { lines, ...rest } = updateReturnNoteDto
    return await this.prisma.returnNote.update({
      where: { id },
      data:
      {
        ...rest,
        returnNoteLine:
        {
          updateMany: lines.map(line => ({
            where: {
              idArticle: line.idArticle,  
              ReturnNoteId: id,  
            },
            data: {
              qunatity: line.quantity,  
            },
        }))
      },
    }
    });
  }

  async remove(id: number) {
    return await this.prisma.returnNote.delete({ 
      where: { id },
      include: { returnNoteLine: { include: { article: true } } }
     });
  }
}
