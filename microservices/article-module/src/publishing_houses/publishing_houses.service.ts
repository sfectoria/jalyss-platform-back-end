import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';


@Injectable()
export class PublishingHousesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPublishingHouseDto: CreatePublishingHouseDto) {
    return await this.prisma.publishingHouse.create({
      data: createPublishingHouseDto,
    });
  }

  async findAll() {
    return await this.prisma.publishingHouse.findMany({include:{logo:true}});
  }

  async findOne(id: number) {
    const publishingHouse = await this.prisma.publishingHouse.findUnique({ where: { id },include:{logo:true} });
    if (!publishingHouse) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return publishingHouse;
  }

  async update(id: number, updatePublishingHouses: UpdatePublishingHouseDto) {
    const publishingHouse = await this.prisma.publishingHouse.findUnique({ where: { id } });
    if (!publishingHouse) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return await this.prisma.publishingHouse.update({
      where: { id },
      data: updatePublishingHouses,
    });
  }

  async remove(id: number) {
    const publishingHouse = await this.prisma.publishingHouse.findUnique({ where: { id } });
    if (!publishingHouse) {
      throw new NotFoundException(`Publishing house with ID ${id} not found`);
    }
    return await this.prisma.publishingHouse.delete({ where: { id } });
  }
}
