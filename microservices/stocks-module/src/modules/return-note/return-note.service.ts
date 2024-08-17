import { Injectable } from '@nestjs/common';
import { CreateReturnNoteDto } from './dto/create-return-note.dto';
import {  UpdateReturnNoteDto } from './dto/update-return-note.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReturnNoteService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createReturnNoteDto: CreateReturnNoteDto) {
    const { lines, ...rest } = createReturnNoteDto
    return await this.prisma.returnNote.create({
      data:
      {
        ...rest,
        returnNoteLine:
        {
          createMany: { data: lines }
        }
      }
    });
  }

  async findAll() {
    return await this.prisma.returnNote.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.returnNote.findUnique({ 
      where: { id },
      include: {returnNoteLine: { include: { artical: true } }}
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
              idArtical: line.idArtical,  
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
      include: { returnNoteLine: { include: { artical: true } } }
     });
  }
}
