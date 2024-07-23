import { Test, TestingModule } from '@nestjs/testing';
import { BonTransfersService } from './bon-transfers.service';

describe('BonTransfersService', () => {
  let service: BonTransfersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonTransfersService],
    }).compile();

    service = module.get<BonTransfersService>(BonTransfersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
