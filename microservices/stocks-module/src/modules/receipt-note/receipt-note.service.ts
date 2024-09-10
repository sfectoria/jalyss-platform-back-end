import { Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-receipt-note.dto';
import { UpdateReceiptNoteDto } from './dto/update-receipt-note.dto';
import { PrismaService } from 'nestjs-prisma';
import { FiltersReceipt } from './entities/receipt-note.entity';

@Injectable()
export class ReceiptNoteService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createReceiptNoteDto: CreateReceiptNoteDto) {
    let { lines, numReceiptNote, idStock, ...rest } = createReceiptNoteDto;

    // Récupérer le dernier receipt note du stock
    const lastReceiptOfStock = await this.prisma.receiptNote.findMany({
      where: { idStock: idStock },
      take: 1,
      orderBy: {
        numReceiptNote: 'desc',
      },
    });

    // Si aucun receipt note n'existe, on initialise numReceiptNote à 1
    numReceiptNote =
      lastReceiptOfStock.length === 0
        ? 1
        : lastReceiptOfStock[0].numReceiptNote + 1;

    // Créer le receipt note
    const receiptNote = await this.prisma.receiptNote.create({
      data: {
        ...rest,
        idStock,
        numReceiptNote,
        receiptNoteLine: {
          createMany: { data: lines },
        },
      },
    });

    // Mise à jour du stock pour chaque ligne du receipt note
    for (const line of lines) {
      const { idArticle, quantity } = line;
      console.log('hhhhh');

      const stockArticle = await this.prisma.stockArticle.findUnique({
        where: {
          stockId_articleId: {
            stockId: idStock,
            articleId: idArticle,
          },
        },
      });

      if (stockArticle) {
        // Si l'article existe déjà dans ce stock, on met à jour la quantité
        await this.prisma.stockArticle.update({
          where: {
            stockId_articleId: {
              stockId: idStock,
              articleId: idArticle,
            },
          },
          data: {
            quantity: { increment: quantity }, // On ajoute la quantité à celle existante
          },
        });
      } else {
        // Si l'article n'existe pas encore dans ce stock, on crée une nouvelle entrée
        await this.prisma.stockArticle.create({
          data: {
            stockId: idStock,
            articleId: idArticle,
            quantity, // Quantité à ajouter
          },
        });
      }
    }

    return receiptNote;
  }

  async findAll(filters: FiltersReceipt) {
    let { take, skip, stocksIds } = filters;
    let where = {};
    if (stocksIds) {
      console.log('stocksIds', stocksIds);

      where['idStock'] = {
        in: stocksIds.map((e) => +e),
      };
    }
    let data= await this.prisma.receiptNote.findMany({
      orderBy:{
        receiptDate:'desc'
      },
      where,
      include: {
        receiptNoteLine: { include: { Article: { include: { cover: true } } } },
        stock: true,
        provider: true,
        transferNote: true,
        purchaseDeliveryInvoice: true,
        purchaseDeliveryNote: true,
        purchaseInvoice: true,
      },
    });
    let count =await this.prisma.receiptNote.count({where})
    return {data,count}
  }

  async findOne(id: number) {
    return await this.prisma.receiptNote.findUnique({
      where: { id },
      include: { receiptNoteLine: { include: { Article: true } }, stock: true },
    });
  }

  async update(id: number, updatereceiptNoteDto: UpdateReceiptNoteDto) {
    const { lines, ...rest } = updatereceiptNoteDto;
    return await this.prisma.receiptNote.update({
      where: { id },
      data: {
        ...rest,
        receiptNoteLine: {
          updateMany: lines.map((line) => ({
            where: {
              idArticle: line.idArticle,
              receiptNoteId: id,
            },
            data: {
              quantity: line.quantity,
            },
          })),
        },
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.receiptNote.delete({
      where: { id },
      include: { receiptNoteLine: { include: { Article: true } }, stock: true },
    });
  }
}
