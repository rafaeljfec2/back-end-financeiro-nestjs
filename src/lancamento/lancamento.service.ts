import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLancamentoDto } from './dto/create-lancamento.dto';
import { UpdateLancamentoDto } from './dto/update-lancamento.dto';
import { Lancamento } from './entities/lancamento.entity';

@Injectable()
export class LancamentoService {
  
  constructor(
    @InjectModel(Lancamento.name) private lancamentoModel: Model<Lancamento>
  ){}
  
  async create(createLancamentoDto: CreateLancamentoDto) {
    return await this.lancamentoModel.create(createLancamentoDto);
  }

  findAll() {
    return this.lancamentoModel.find().exec();
  }

  findOne(id: string) {
    return this.lancamentoModel.findById(id).exec();
  }

  async update(id: string, updateLancamentoDto: UpdateLancamentoDto) {
    await this.lancamentoModel.updateOne({ _id: id }, updateLancamentoDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return this.lancamentoModel.deleteOne({ _id: id }).exec();
  }
}
