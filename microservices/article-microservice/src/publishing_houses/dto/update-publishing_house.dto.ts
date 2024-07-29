import { PartialType } from '@nestjs/mapped-types';
import { CreatePublishingHouseDto } from './create-publishing_house.dto';

export class UpdatePublishingHouseDto extends PartialType(CreatePublishingHouseDto) {}
