import { Injectable } from '@nestjs/common';
import { CreateBonRetourDto } from './dto/create-bon-retour.dto';
import { UpdateBonRetourDto } from './dto/update-bon-retour.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BonRetoursService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createBonRetourDto: CreateBonRetourDto) {
    const { lines, ...rest } = createBonRetourDto
    return await this.prisma.bon_retour.create({
      data:
      {
        ...rest,
        ArticleRetour:
        {
          createMany: { data: lines }
        }
      }
    });
  }

  async findAll() {
    return await this.prisma.bon_retour.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.bon_retour.findUnique({ 
      where: { id },
      include: {ArticleRetour: { include: { article: true } }}
       });
  }

  async update(id: number, updateBonRetourDto: UpdateBonRetourDto) {
    const { lines, ...rest } = updateBonRetourDto
    return await this.prisma.bon_retour.update({
      where: { id },
      data:
      {
        ...rest,
        ArticleRetour:
        {
          updateMany: lines.map(line => ({
            where: {
              id_article: line.id_article,  
              bonRetourId: id,  
            },
            data: {
              qunatity: line.qunatity,  
            },
        }))
      },
    }
    });
  }

  async remove(id: number) {
    return await this.prisma.bon_retour.delete({ 
      where: { id },
      include: { ArticleRetour: { include: { article: true } } }
     });
  }
}
