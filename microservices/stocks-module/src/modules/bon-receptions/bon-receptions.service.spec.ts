import { Test, TestingModule } from '@nestjs/testing';
import { BonReceptionsService } from './bon-receptions.service';

describe('BonReceptionsService', () => {
  let service: BonReceptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonReceptionsService],
    }).compile();

    service = module.get<BonReceptionsService>(BonReceptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
