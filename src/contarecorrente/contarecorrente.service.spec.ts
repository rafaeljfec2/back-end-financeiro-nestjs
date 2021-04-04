import { Test, TestingModule } from '@nestjs/testing';
import { ContarecorrenteService } from './contarecorrente.service';

describe('ContarecorrenteService', () => {
  let service: ContarecorrenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContarecorrenteService],
    }).compile();

    service = module.get<ContarecorrenteService>(ContarecorrenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
