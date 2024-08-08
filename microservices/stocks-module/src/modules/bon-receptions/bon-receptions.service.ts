import { Injectable } from '@nestjs/common';
import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BonReceptionsService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createBonReceptionDto: CreateBonReceptionDto) {
    const { lines, ...rest } = createBonReceptionDto
    return await this.prisma.bonReception.create(
      {
        data:
        {
          ...rest,
          bonReception_Line:
          {
            createMany: { data: lines }
          }
        }
      }
    );
  }

  async findAll() {
    return await this.prisma.bonReception.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.bonReception.findUnique({
      where: { id },
      include: { bonReception_Line: { include: { article: true } }, stock: true },
    });
  }

  async update(id: number, updateBonReceptionDto: UpdateBonReceptionDto) {
    const { lines, ...rest } = updateBonReceptionDto
    return await this.prisma.bonReception.update({
      where: { id },
      data:
      {
        ...rest,
        bonReception_Line:
        {
          updateMany: lines.map(line => ({
            where: {
              id_article: line.id_article,
              bonReceptionId: id,
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
    return await this.prisma.bonReception.delete({
      where: { id },
      include: { bonReception_Line: { include: { article: true } }, stock: true },
    })
  }
}
