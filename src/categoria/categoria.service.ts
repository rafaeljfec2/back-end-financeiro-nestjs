import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectModel(Categoria.name) private categoriaModel: Model<Categoria>
  ){}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.categoriaModel.create(createCategoriaDto);
  }

  findAll() {
    return this.categoriaModel.find().exec();
  }

  findOne(id: string) {
    return this.categoriaModel.findById(id).exec();
  }

  async update(id: string, updateCategoriaDto: UpdateCategoriaDto) {
    await this.categoriaModel.updateOne({ _id: id}, updateCategoriaDto).exec();
    return this.findOne(id);
  }
  
  async remove(id: string) {
    return this.categoriaModel.deleteOne({ _id: id});
  }
}
