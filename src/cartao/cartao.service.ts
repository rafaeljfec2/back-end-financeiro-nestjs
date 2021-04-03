import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { UpdateCartaoDto } from './dto/update-cartao.dto';
import { Cartao } from './entities/cartao.entity';

@Injectable()
export class CartaoService {

  constructor(
    @InjectModel(Cartao.name) private cartaoModel: Model<Cartao>
  ){}

  async create(createCartaoDto: CreateCartaoDto) {         
    return await this.cartaoModel.create(createCartaoDto);
  }

  findAll() {
    return this.cartaoModel.find().exec();
  }

  findOne(id: string) {
    return this.cartaoModel.findById(id).exec();
  }

  async update(id: string, updateCartaoDto: UpdateCartaoDto) {
    await this.cartaoModel.updateOne({ _id: id}, updateCartaoDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.cartaoModel.deleteOne({ _id: id }).exec();
  }
}
