import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>
  ){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioModel.create(createUsuarioDto);
  }

  findAll() {
    return this.usuarioModel.find().exec();
  }

  findOne(id: string) {
    return this.usuarioModel.findById(id).exec();
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuarioModel.updateOne({ _id: id }, updateUsuarioDto).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    await this.usuarioModel.deleteOne({ _id: id });
  } 

  async findAuthUser(email: string): Promise<Usuario>{
    return await this.usuarioModel.findOne({ email: email }).exec(); 
  }
}
