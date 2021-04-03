import { Module } from '@nestjs/common';
import { CartaoService } from './cartao.service';
import { CartaoController } from './cartao.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cartao, CartaoSchema } from './entities/cartao.entity';

@Module({
  imports:[MongooseModule.forFeature([{
      name: Cartao.name,
      schema: CartaoSchema
    }])
  ],  
  controllers: [CartaoController],
  providers: [CartaoService]
})
export class CartaoModule {}
