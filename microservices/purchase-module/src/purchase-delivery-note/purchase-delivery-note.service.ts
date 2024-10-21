import { Injectable } from '@nestjs/common';
import { CreatePurchaseDeliveryNoteDto } from './dto/create-purchase-delivery-note.dto';
import { UpdatePurchaseDeliveryNoteDto } from './dto/update-purchase-delivery-note.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { ReceiptNoteHelper } from 'src/helpers/receiptNoteHelper';
import { Filters } from './entities/purchase-delivery-note.entity';

@Injectable()
export class PurchaseDeliveryNoteService {
  constructor(
    private readonly prisma: PrismaService,
    private helperReceiptNote : ReceiptNoteHelper
    ) {}

  async create(createPurchaseDeliveryNoteDto: CreatePurchaseDeliveryNoteDto) {
    return await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        let {idReceiptNote,lines,idStock,idProvider, ...rest } = createPurchaseDeliveryNoteDto;
        if(!idReceiptNote){
          const newReceiptNote = await this.helperReceiptNote.create(
            prisma,
            {
              idStock: idStock,
              idProvider:idProvider,
              typeReceipt:"achat",
              date: createPurchaseDeliveryNoteDto.deliveryDate,
              receiptNoteLines: lines,
              totalAmount:createPurchaseDeliveryNoteDto?.totalAmount,
              paymentStatus: createPurchaseDeliveryNoteDto?.paymentStatus,
              paymentType: createPurchaseDeliveryNoteDto?.paymentType,
              discount: createPurchaseDeliveryNoteDto?.discount,
              tax: createPurchaseDeliveryNoteDto?.tax,
              modified: createPurchaseDeliveryNoteDto?.modified,
              subTotalAmount: createPurchaseDeliveryNoteDto?.subTotalAmount,
              payedAmount: createPurchaseDeliveryNoteDto?.payedAmount,
              restedAmount: createPurchaseDeliveryNoteDto?.restedAmount,  
            },
          );
          idReceiptNote=newReceiptNote.id
        }
         return await prisma.purchaseDeliveryNote.create({
      data: {
        idProvider,
        ...rest,
        deliveryDate:new Date(rest.deliveryDate).toISOString(),
        purchaseDeliveryNoteLine: {
          createMany: { data: lines },
        },
        idReceiptNote
      },
    });
        
      })

  }
  async findAll(filters : Filters) {

    let { take, skip, receipNotesIds } = filters;
    console.log('THIS', take, skip);
  
    take = !take ? 10 : +take;
    skip = !skip ? 0 : +skip;
    
    let where = {};
    
    if (Array.isArray(receipNotesIds) && receipNotesIds.length > 0) {
      where['idReceiptNote'] = {
        in: receipNotesIds.map((elem) => +elem), // Convertir chaque élément en nombre
      };
    }

    return await this.prisma.purchaseDeliveryNote.findMany({
      where,
      take,
      skip,
      include: {
        purchaseDeliveryNoteLine: { include: { article: true } },
        receiptNote: true,
      },
    }
    );
  }

  async findOne(id: number) {
    return await this.prisma.purchaseDeliveryNote.findUnique({
      where: { id },
      include: {
        purchaseDeliveryNoteLine: { include: { article: true } },
        receiptNote: true,
      },
    });
  }

  async update(
    id: number,
    updatepurchaseDeliveryNoteDto: UpdatePurchaseDeliveryNoteDto,
  ) {
    const { lines, ...rest } = updatepurchaseDeliveryNoteDto;
    
    // Commencez par la mise à jour des champs non liés aux lignes
    const updateData: any = {
      ...rest,
    };
  
    // Si 'lines' est défini et non vide, mettez à jour les lignes associées
    if (lines && lines.length > 0) {
      updateData.purchaseDeliveryNoteLine = {
        updateMany: lines.map((line) => ({
          where: {
            idArticle: line.idArticle,
            idDeliveryNote: id,
          },
          data: {
            quantity: line.quantity,
          },
        })),
      };
    }
  
    return await this.prisma.purchaseDeliveryNote.update({
      where: { id },
      data: updateData,
    });
  }
  

  async remove(id: number) {
    await this.prisma.purchaseDeliveryNoteLine.deleteMany({
      where: { idDeliveryNote: id },
    });
    return await this.prisma.purchaseDeliveryNote.delete({
      where: { id },
    });
  }
}
