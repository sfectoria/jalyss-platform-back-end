import { PartialType } from '@nestjs/mapped-types';
import { CreateBonComndDto } from './create-bon-comnd.dto';

export class UpdateBonComndDto extends PartialType(CreateBonComndDto) {}
