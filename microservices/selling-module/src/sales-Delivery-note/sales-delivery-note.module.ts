import { Module } from '@nestjs/common';
import { SalesDeliveryNoteService } from './sales-delivery-note.service';
import { SalesDeliveryNoteController } from './sales-delivery-note.controller';
import { ExitNote } from 'src/helpers/exitNote';

@Module({
  controllers: [SalesDeliveryNoteController],
  providers: [SalesDeliveryNoteService,ExitNote],
  
})
export class SalesDeliveryNoteModule {}
