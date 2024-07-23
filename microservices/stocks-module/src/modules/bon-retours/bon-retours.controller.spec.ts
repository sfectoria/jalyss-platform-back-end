import { Test, TestingModule } from '@nestjs/testing';
import { BonRetoursController } from './bon-retours.controller';
import { BonRetoursService } from './bon-retours.service';

describe('BonRetoursController', () => {
  let controller: BonRetoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonRetoursController],
      providers: [BonRetoursService],
    }).compile();

    controller = module.get<BonRetoursController>(BonRetoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
