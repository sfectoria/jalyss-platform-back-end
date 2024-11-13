import { Inject, Injectable } from '@nestjs/common';
import { CreateReceiptNoteDto } from './dto/create-stock.dto';
import { UpdateReceiptNoteDto } from './dto/update-stock.dto';
import { ClientProxy } from '@nestjs/microservices';
import { FiltersMovement, FiltersReceipt } from './entities/stock.entity';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class MovementsService {
  constructor(@Inject ('STOCKS_MICROSERVICE') private readonly stocksClient: ClientProxy, private readonly prisma: PrismaService
) {}
 
  findAll(filters:FiltersMovement) {
    console.log('find All receipt Note');
    return this.stocksClient.send(
      { cmd: 'all_movements' },
      filters
    )
  }

  findAll2(filters:FiltersMovement) {
    console.log('find All receipt Note');

    return this.prisma.receiptNote.findMany({
      where: {
        idStock: {  in: filters.stocksIds?.map(id => parseInt(id.toString(), 10)) }, 
      },
      include: {
        client: true,    
        provider: true, 
        stock : true, 
        receiptNoteLine: {
          include: {
            Article: true  
          }
        },
      },
      take: filters.take,
      skip: filters.skip,
    });
  }
  findOne(id: number) {
    console.log("hhh",id);
    return this.stocksClient.send(
      { cmd: 'one_movement' },
      {id}
    )
  }

//   update(id: number, updateReceiptNoteDto: UpdateReceiptNoteDto) {
//     return this.stocksClient.send(
//       { cmd: 'update_receiptNote' },
//       {id, updateReceiptNoteDto}
//     )
//   }

//   remove(id: number) {
//     return this.stocksClient.send(
//       { cmd: 'delete_receiptNote' },
//       {id}
//     )
//   }
}
