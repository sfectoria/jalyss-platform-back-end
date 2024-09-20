import { PartialType } from '@nestjs/mapped-types';
import { CreateInventoryDto, InventoryLineDto } from './create-inventory.dto';

export class UpdateInventoryDto extends PartialType(CreateInventoryDto) {}

export class UpdateInventoryLineDto extends PartialType(InventoryLineDto) {}
