import { Injectable } from '@nestjs/common';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ArticalsService {
  constructor(private readonly prisma : PrismaService) {}

 async create(createArticalDto: CreateArticalDto) {
    return await this.prisma.artical.create({
      data:createArticalDto
    });
    }

 async findAll() {
    return await this.prisma.artical.findMany(); 

  }

 async findOne(id: number) {
    return await this.prisma.artical.findUnique({ where: { id } }); 
  }

async  update(id: number, updateArticalDto: UpdateArticalDto) {
    return await this.prisma.artical.update({ 
      where: { id },
      data: updateArticalDto 
    }); 
    }

  async remove(id: number) {
    return await this.prisma.artical.delete({ where: { id } })
  }
}
