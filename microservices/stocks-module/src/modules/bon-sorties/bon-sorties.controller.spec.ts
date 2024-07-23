import { Test, TestingModule } from '@nestjs/testing';
import { BonSortiesController } from './bon-sorties.controller';
import { BonSortiesService } from './bon-sorties.service';

describe('BonSortiesController', () => {
  let controller: BonSortiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonSortiesController],
      providers: [BonSortiesService],
    }).compile();

    controller = module.get<BonSortiesController>(BonSortiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
