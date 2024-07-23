import { Test, TestingModule } from '@nestjs/testing';
import { BonSortiesService } from './bon-sorties.service';

describe('BonSortiesService', () => {
  let service: BonSortiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BonSortiesService],
    }).compile();

    service = module.get<BonSortiesService>(BonSortiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
