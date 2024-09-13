import { Injectable } from '@nestjs/common';
import { CreateTransferNoteDto } from './dto/create-bon-transfer.dto';
import {  UpdateTransferNoteDto } from './dto/update-bon-transfer.dto';
import { PrismaService } from 'nestjs-prisma';
import { ExitNoteHelper, ReceiptNoteHelper } from 'src/helpers/ExitAndReceiptNote';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransferNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote:ReceiptNoteHelper,
    private helperExitNote:ExitNoteHelper,
  ) {}
  async create(createTransferNoteDto: CreateTransferNoteDto) {
    return await this.prisma.$transaction(
      async(prisma : Prisma.TransactionClient)=>{
        let { lines,idReceiptNote,idExitNote, ...rest } = createTransferNoteDto
       if(!idReceiptNote){
        const newReceiptNote=await this.helperReceiptNote.create(
          prisma,
          {
            idStock:createTransferNoteDto.to,
            typeReceipt:"transfer",
            date:new Date,
            receiptNoteLines:lines
          }
        )
        idReceiptNote=newReceiptNote.id
        console.log(idReceiptNote,'new receipt note',newReceiptNote);
        
       }

       if (!idExitNote) {
        const newExitNote = await this.helperExitNote.create(
          prisma,
          {
            idStock: createTransferNoteDto.from,
            date: createTransferNoteDto.date,
            exitNoteLines: lines,
          },
        ); //
        console.log('newExitNote', newExitNote)
        idExitNote = newExitNote.id;
      }
    
    return await prisma.transferNote.create({
      data:
      {
        ...rest,
        idReceiptNote,
        idExitNote,
        transferNoteLine:
        {
          createMany: { data: lines }
        }
      }
    }); 
    })}

  async findAll() {
    return await this.prisma.transferNote.findMany(); 
  }

  async findOne(id: number) {
    console.log('id',id);
    
    return await this.prisma.transferNote.findUnique({ where: { id }, include:{stockTo:true,stockFrom:true} });
  }

  async update(id: number, updateTransferNoteDto: UpdateTransferNoteDto) {
    return await this.prisma.transferNote.update({
      where: { id },
      data: updateTransferNoteDto
    })
  }

  async remove(id: number) {
    return await this.prisma.transferNote.delete({ where: { id } })
  }
}
