import { Module } from '@nestjs/common';
import { LancamentoService } from './lancamento.service';
import { LancamentoController } from './lancamento.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Lancamento, LancamentoSchema } from './entities/lancamento.entity';

@Module({
  imports:[MongooseModule.forFeature([{
    name: Lancamento.name,
    schema: LancamentoSchema
  }])],
  controllers: [LancamentoController],
  providers: [LancamentoService]
})
export class LancamentoModule {}
