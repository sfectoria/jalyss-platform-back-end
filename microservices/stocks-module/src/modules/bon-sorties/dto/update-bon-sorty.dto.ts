import { PartialType } from '@nestjs/mapped-types';
import { CreateBonSortyDto } from './create-bon-sorty.dto';

export class UpdateBonSortyDto extends PartialType(CreateBonSortyDto) {}
