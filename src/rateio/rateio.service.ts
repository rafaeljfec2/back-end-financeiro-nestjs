import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRateioDto } from './dto/create-rateio.dto';
import { UpdateRateioDto } from './dto/update-rateio.dto';
import { Rateio } from './entities/rateio.entity';

@Injectable()
export class RateioService {
  
  constructor(
    @InjectModel(Rateio.name) private rateioModel: Model<Rateio>
  ){}
  
  async create(createRateioDto: CreateRateioDto) {
    return await this.rateioModel.create(createRateioDto);
  }

  findAll() {
    return this.rateioModel.find().exec();
  }

  findOne(id: string) {
    return this.rateioModel.findById(id).exec();
  }

  async update(id: string, updateRateioDto: UpdateRateioDto) {
    await this.rateioModel.updateOne({ _id: id }, updateRateioDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.rateioModel.deleteOne({ _id: id }).exec();
  }
}
