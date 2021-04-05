import { Test, TestingModule } from '@nestjs/testing';
import { RateioService } from './rateio.service';

describe('RateioService', () => {
  let service: RateioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RateioService],
    }).compile();

    service = module.get<RateioService>(RateioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
