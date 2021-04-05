import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Conta } from './entities/conta.entity';

@Injectable()
export class ContaService {
  
  constructor(
    @InjectModel(Conta.name) private contaModule: Model<Conta>
  ){}

  async create(createContaDto: CreateContaDto) {
    return await this.contaModule.create(createContaDto);
  }

  findAll() {
    return this.contaModule.find().exec();
  }

  findOne(id: string) {
    return this.contaModule.findById(id).exec();
  }

  async update(id: string, updateContaDto: UpdateContaDto) {
    await this.contaModule.updateOne({ _id: id }, updateContaDto).exec();
    return this.findOne(id);    
  }

  async remove(id: string) {
    await this.contaModule.deleteOne({ _id: id }).exec();
  }
}
