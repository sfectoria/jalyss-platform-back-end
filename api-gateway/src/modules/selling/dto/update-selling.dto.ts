import { PartialType } from '@nestjs/mapped-types';
import { CreateSellingDto } from './create-selling.dto';

export class UpdateSellingDto extends PartialType(CreateSellingDto) {}
