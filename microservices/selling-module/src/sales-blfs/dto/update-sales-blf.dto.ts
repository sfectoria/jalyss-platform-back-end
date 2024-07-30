import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesBlfDto } from './create-sales-blf.dto';

export class UpdateSalesBlfDto extends PartialType(CreateSalesBlfDto) {}
