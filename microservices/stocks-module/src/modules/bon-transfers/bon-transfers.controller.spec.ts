import { Test, TestingModule } from '@nestjs/testing';
import { BonTransfersController } from './bon-transfers.controller';
import { BonTransfersService } from './bon-transfers.service';

describe('BonTransfersController', () => {
  let controller: BonTransfersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonTransfersController],
      providers: [BonTransfersService],
    }).compile();

    controller = module.get<BonTransfersController>(BonTransfersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
