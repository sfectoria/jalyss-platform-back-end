import { Injectable } from '@nestjs/common';
import { CreateExitNoteDto } from './dto/create-exit-note.dto';
import {  UpdateExitNoteDto } from './dto/update-exit-note.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ExitNoteService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExitNoteDto: CreateExitNoteDto) {
    let { lines, numExitNote, ...rest } = createExitNoteDto
    const lastExitNoteOfStock = await this.prisma.exitNote.findMany({
      where: { stockId: createExitNoteDto.stockId },
      take: 1,
      orderBy: {
        numExitNote: 'desc',
      },     
    });
    console.log(numExitNote,'numExitNote');
    if (lastExitNoteOfStock.length == 0){
      numExitNote = 1
    }
    else numExitNote=lastExitNoteOfStock[0].numExitNote+1
    return await this.prisma.exitNote.create({
      data : 
      {
        ...rest,
        numExitNote,
        exitNoteLine :  
        {
          createMany : { data : lines }
        }
      }
    });
  }

  async findAll() {
    return await this.prisma.exitNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.exitNote.findUnique({ where: { id } });
  }

  async update(id: number, updateExitNoteDto: UpdateExitNoteDto) {
    const { lines, ...rest } = updateExitNoteDto
    return await this.prisma.exitNote.update({
      where: { id },
      data:
      {
        ...rest,
        exitNoteLine:
        {
          updateMany: lines.map(line => ({
            where: {
              articleId: line.articleId,
              exitNoteId: id,
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
    return await this.prisma.exitNote.delete({ where: { id } })
  }
}
