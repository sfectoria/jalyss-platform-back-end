import { PartialType } from '@nestjs/mapped-types';
import { CreateBonComndDto, CreateSalesblDto, CreateSellingDto } from './create-selling.dto';

export class UpdateSellingDto extends PartialType(CreateSellingDto) {}

export class UpdateBonComndDto extends PartialType(CreateBonComndDto) {}

export class UpdateSalesblDto extends PartialType(CreateSalesblDto) {}
