import { Injectable } from '@nestjs/common';
import { CreateTransferNoteDto } from './dto/create-bon-transfer.dto';
import {  UpdateTransferNoteDto } from './dto/update-bon-transfer.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransferNoteService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTransferNoteDto: CreateTransferNoteDto) {
    const { lines, ...rest } = createTransferNoteDto
    return await this.prisma.transferNote.create({
      data:
      {
        ...rest,
        transferNoteLine:
        {
          createMany: { data: lines } //creation de many transferNoteLine
        }
      }
    });  }

  async findAll() {
    return await this.prisma.transferNote.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.transferNote.findUnique({ where: { id } });
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
