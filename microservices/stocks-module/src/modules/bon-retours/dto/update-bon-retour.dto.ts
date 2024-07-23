import { PartialType } from '@nestjs/mapped-types';
import { CreateBonRetourDto } from './create-bon-retour.dto';

export class UpdateBonRetourDto extends PartialType(CreateBonRetourDto) {}
