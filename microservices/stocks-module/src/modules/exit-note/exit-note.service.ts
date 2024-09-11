import { Injectable } from '@nestjs/common';
import { CreateExitNoteDto } from './dto/create-exit-note.dto';
import {  UpdateExitNoteDto } from './dto/update-exit-note.dto';
import { PrismaService } from 'nestjs-prisma';
import { FiltersExit } from './entities/exit-note.entity';

@Injectable()
export class ExitNoteService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExitNoteDto: CreateExitNoteDto) {
    let { lines, numExitNote, ...rest } = createExitNoteDto;
    
    // Récupération du dernier Exit Note pour ce stock
    const lastExitNoteOfStock = await this.prisma.exitNote.findMany({
      where: { stockId: createExitNoteDto.stockId },
      take: 1,
      orderBy: {
        numExitNote: 'desc',
      },     
    });
  
    console.log(numExitNote, 'numExitNote');
    
    // Gestion du numéro du bon de sortie
    if (lastExitNoteOfStock.length == 0) {
      numExitNote = 1;
    } else {
      numExitNote = lastExitNoteOfStock[0].numExitNote + 1;
    }
  
    // Création de l'Exit Note avec les lignes correspondantes
    const exitNote = await this.prisma.exitNote.create({
      data: {
        ...rest,
        numExitNote,
        exitNoteLine: {
          createMany: { data: lines },
        },
      },
    });
  
    // Parcours de chaque ligne pour mettre à jour les quantités dans le stock
    for (const line of lines) {
      const stockArticle = await this.prisma.stockArticle.findFirst({
        where: {
          stockId: createExitNoteDto.stockId,
          articleId: line.articleId, // Correspond à l'ID de l'article dans cette ligne
        },
      });
  
      if (stockArticle) {
        // Vérification si la quantité est suffisante
        if (stockArticle.quantity >= line.quantity) {
          // Mise à jour de la quantité dans le stock
          await this.prisma.stockArticle.update({
            where: {
              id: stockArticle.id, // ID de l'entrée stockArticle
            },
            data: {
              quantity: stockArticle.quantity - line.quantity, // Réduction de la quantité
            },
          });
        } else {
          throw new Error(`La quantité de l'article ${line.articleId} dans le stock est insuffisante pour la sortie.`);
        }
      } else {
        throw new Error(`L'article ${line.articleId} n'existe pas dans le stock ${createExitNoteDto.stockId}.`);
      }
    }
  
    return exitNote;
  }
  

  async findAll(filters:FiltersExit) {
    let {take,skip,stocksIds,salesChannelsIds}=filters
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    let where = {};
    if(stocksIds){
    where["stockId"]={
      in:stocksIds.map((e)=> +e)
    }
  }
    if(salesChannelsIds) {
      where["OR"]=[
        {salesInvoice:{some:{saleChannelId:{in: salesChannelsIds.map((elem) => +elem)}}}},
        {salesDeliveryInvoice:{some:{salesChannelsId:{in: salesChannelsIds.map((elem) => +elem)}}}},
        {salesDeliveryNote:{some:{saleChannelId:{in: salesChannelsIds.map((elem) => +elem)}}}}
      ]
    }
    let data= await this.prisma.exitNote.findMany({
      where,
      take,
      skip,
      include: {
        exitNoteLine: { include: { Article: {include:{cover:true}} } },
        stock: true,
        transferNote: true,
        salesDeliveryInvoice: true,
        salesDeliveryNote: true,
        salesInvoice: true,
      },
    });

    let count = await this.prisma.exitNote.count({where})
    return {data,count}
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
