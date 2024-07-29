import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesBlDto } from './create-sales-bl.dto';

export class UpdateSalesBlDto extends PartialType(CreateSalesBlDto) {}
