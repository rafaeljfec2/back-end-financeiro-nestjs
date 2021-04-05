import { Test, TestingModule } from '@nestjs/testing';
import { RateioController } from './rateio.controller';
import { RateioService } from './rateio.service';

describe('RateioController', () => {
  let controller: RateioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateioController],
      providers: [RateioService],
    }).compile();

    controller = module.get<RateioController>(RateioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
