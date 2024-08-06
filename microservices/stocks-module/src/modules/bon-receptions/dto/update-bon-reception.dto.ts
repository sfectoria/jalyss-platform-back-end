import { PartialType } from '@nestjs/mapped-types';
import { CreateBonReceptionDto } from './create-bon-reception.dto';

export class UpdateBonReceptionDto extends PartialType(CreateBonReceptionDto) {}
