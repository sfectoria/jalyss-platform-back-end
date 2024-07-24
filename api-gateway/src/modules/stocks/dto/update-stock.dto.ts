import { PartialType } from '@nestjs/mapped-types';
import { CreateBonReceptionDto, CreateBonSortieDto, CreateStockDto, CreateBonTransferDto, CreateBonRetourDto } from './create-stock.dto';

export class UpdateStockDto extends PartialType(CreateStockDto) {}

export class UpdateBonReceptionDto extends PartialType(CreateBonReceptionDto) {}

export class UpdateBonSortieDto extends PartialType(CreateBonSortieDto) {}

export class UpdateBonTransferDto extends PartialType(CreateBonTransferDto) {}

export class UpdateBonRetourDto extends PartialType(CreateBonRetourDto) {}