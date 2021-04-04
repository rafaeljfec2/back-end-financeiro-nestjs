import { Test, TestingModule } from '@nestjs/testing';
import { ContarecorrenteController } from './contarecorrente.controller';
import { ContarecorrenteService } from './contarecorrente.service';

describe('ContarecorrenteController', () => {
  let controller: ContarecorrenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContarecorrenteController],
      providers: [ContarecorrenteService],
    }).compile();

    controller = module.get<ContarecorrenteController>(ContarecorrenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
