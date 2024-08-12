import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()

class entity {

}

class BonSortie {
    constructor(private readonly prisma: PrismaService) {}
    async create(createBonSortyDto: entity ) {
        let { bonSortieLines,num_bonSortie, ...rest } = createBonSortyDto
        const lastExitNoteOfStock = await this.prisma.bonSortie.findMany({
          where: { stockId: createBonSortyDto.stockId },
          take: 1,
          orderBy: {
            num_bonSortie: 'desc',
          },     
        });
        console.log(num_bonSortie,'num_bonSortie');
        if (lastExitNoteOfStock.length == 0){
          num_bonSortie = 1
        }
        else num_bonSortie=lastExitNoteOfStock[0].num_bonSortie+1
        return await this.prisma.bonSortie.create({
          data : 
          {
            ...rest,
            num_bonSortie,
            BonSortie_line : 
            {
              createMany : { data : bonSortieLines }
            }
          }
        });
      }
}