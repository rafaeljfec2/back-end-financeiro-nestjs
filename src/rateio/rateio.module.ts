import { Module } from '@nestjs/common';
import { RateioService } from './rateio.service';
import { RateioController } from './rateio.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rateio, RateioSchema } from './entities/rateio.entity';

@Module({
  imports:[MongooseModule.forFeature([{
    name: Rateio.name,
    schema: RateioSchema
  }])],
  controllers: [RateioController],
  providers: [RateioService]
})
export class RateioModule {}
