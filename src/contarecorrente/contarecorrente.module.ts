import { Module } from '@nestjs/common';
import { ContarecorrenteService } from './contarecorrente.service';
import { ContarecorrenteController } from './contarecorrente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contarecorrente, ContaRecorrenteSchema } from './entities/contarecorrente.entity';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Contarecorrente.name,
    schema: ContaRecorrenteSchema
  }])],
  controllers: [ContarecorrenteController],
  providers: [ContarecorrenteService]
})
export class ContarecorrenteModule {}
