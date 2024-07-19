import { Test, TestingModule } from '@nestjs/testing';
import { BonReceptionsController } from './bon-receptions.controller';
import { BonReceptionsService } from './bon-receptions.service';

describe('BonReceptionsController', () => {
  let controller: BonReceptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonReceptionsController],
      providers: [BonReceptionsService],
    }).compile();

    controller = module.get<BonReceptionsController>(BonReceptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
