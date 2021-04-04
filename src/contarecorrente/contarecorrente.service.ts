import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContarecorrenteDto } from './dto/create-contarecorrente.dto';
import { UpdateContarecorrenteDto } from './dto/update-contarecorrente.dto';
import { Contarecorrente } from './entities/contarecorrente.entity';

@Injectable()
export class ContarecorrenteService {
  
  constructor(
    @InjectModel(Contarecorrente.name) private contaRecorrenteModel: Model<Contarecorrente>
  ){}
  
  async create(createContarecorrenteDto: CreateContarecorrenteDto) {
    return await this.contaRecorrenteModel.create(createContarecorrenteDto);
  }

  findAll() {
    return this.contaRecorrenteModel.find().exec();
  }

  findOne(id: string) {
    return this.contaRecorrenteModel.findById(id).exec();
  }

  async update(id: string, updateContarecorrenteDto: UpdateContarecorrenteDto) {
    await this.contaRecorrenteModel.updateOne({ _id: id}, updateContarecorrenteDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    this.contaRecorrenteModel.deleteOne({ _id: id }).exec();
  }
}
