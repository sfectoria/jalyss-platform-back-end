import { Injectable } from '@nestjs/common';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class SalesInvoicesService {
  constructor(private readonly prisma : PrismaService) {}
  async create(createSalesInvoiceDto: CreateSalesInvoiceDto) {
    return await this.prisma.$transaction(async (prisma) => {
      const bonSortieId = createSalesInvoiceDto.bonSortieId;
      
      // Create venteFacture
      const venteFacture = await prisma.venteFacture.create({
        data: {
          id_bon_commande: createSalesInvoiceDto.id_bon_commande,
          date: createSalesInvoiceDto.date,
          bon_sortie: {
            connectOrCreate: {
              where: { id: bonSortieId },
              create: {
                sortie_date: new Date(createSalesInvoiceDto.date),
                num_bonSortie: bonSortieId,
                BonSortie_line: {
                  create: createSalesInvoiceDto.venteFacture_lines.map(line => ({
                    articleId: line.articleId,
                  })),
                },
              },
            },
          },
          venteFacture_lines: {
            create: createSalesInvoiceDto.venteFacture_lines.map(line => ({
              id_article: line.articleId,
            })),
          },
        },
      });

      // Ensure bonSortie is created if not exists
      for (const line of createSalesInvoiceDto.venteFacture_lines) {
        await prisma.bonSortie.update({
          where: { id: bonSortieId },
          data: {
            BonSortie_line: {
              connectOrCreate: {
                where: { articleId: line.articleId },
                create: { articleId: line.articleId },
              },
            },
          },
        });
      }

      return venteFacture;
    });
  }




  async findAll() {
    return await this.prisma.venteFacture.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.venteFacture.findUnique({where : {id}});
  }

  async update(id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto) {
    return await this.prisma.venteFacture.update({where : {id}, data : updateSalesInvoiceDto});
  }

  async remove(id: number) {
    return await this.prisma.venteFacture.delete({where : {id}});
  }
}
