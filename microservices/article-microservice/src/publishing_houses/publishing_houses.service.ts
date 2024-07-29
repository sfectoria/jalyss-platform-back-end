import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';
// import { CreatePublishingHouseDto } from './dto/create-publishing-house.dto';
// import { UpdatePublishingHouseDto } from './dto/update-publishing-house.dto';

@Injectable()
export class PublishingHousesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPublishingHouseDto: CreatePublishingHouseDto) {
    return await this.prisma.publishingHouses.create({
      data: createPublishingHouseDto,
    });
  }

  async findAll() {
    return await this.prisma.publishingHouses.findMany();
  }

  async findOne(id: number) {
    const publishingHouse = await this.prisma.publishingHouses.findUnique({ where: { id } });
    if (!publishingHouse) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return publishingHouse;
  }

  async update(id: number, updatePublishingHouseDto: UpdatePublishingHouseDto) {
    const publishingHouse = await this.prisma.publishingHouses.findUnique({ where: { id } });
    if (!publishingHouse) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return await this.prisma.publishingHouses.update({
      where: { id },
      data: updatePublishingHouseDto,
    });
  }

  async remove(id: number) {
    const publishingHouse = await this.prisma.publishingHouses.findUnique({ where: { id } });
    if (!publishingHouse) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return await this.prisma.publishingHouses.delete({ where: { id } });
  }
}
