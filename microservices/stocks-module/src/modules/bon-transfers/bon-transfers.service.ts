import { Injectable } from '@nestjs/common';
import { CreateBonTransferDto } from './dto/create-bon-transfer.dto';
import { UpdateBonTransferDto } from './dto/update-bon-transfer.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BonTransfersService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBonTransferDto: CreateBonTransferDto) {
    const { lines, ...rest } = createBonTransferDto
    return await this.prisma.bonTransfer.create({
      data:
      {
        ...rest,
        BonTransfer_Line:
        {
          createMany: { data: lines }
        }
      }
    });  }

  async findAll() {
    return await this.prisma.bonTransfer.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.bonTransfer.findUnique({ where: { id } });
  }

  async update(id: number, updateBonTransferDto: UpdateBonTransferDto) {
    return await this.prisma.bonTransfer.update({
      where: { id },
      data: updateBonTransferDto
    })
  }

  async remove(id: number) {
    return await this.prisma.bonTransfer.delete({ where: { id } })
  }
}
