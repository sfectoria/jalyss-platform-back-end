import { Test, TestingModule } from '@nestjs/testing';
import { BonRetoursService } from './bon-retours.service';

describe('BonRetoursService', () => {
  let service: BonRetoursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonRetoursService],
    }).compile();

    service = module.get<BonRetoursService>(BonRetoursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
