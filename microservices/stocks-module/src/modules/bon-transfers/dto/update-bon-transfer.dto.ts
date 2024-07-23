import { PartialType } from '@nestjs/mapped-types';
import { CreateBonTransferDto } from './create-bon-transfer.dto';

export class UpdateBonTransferDto extends PartialType(CreateBonTransferDto) {}
