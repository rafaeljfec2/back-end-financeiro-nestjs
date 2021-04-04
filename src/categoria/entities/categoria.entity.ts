import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Usuario } from "src/usuario/entities/usuario.entity";

@Schema()
export class Categoria extends Document{

    @Prop({ type: mongoose.Schema.Types.ObjectId, reg: 'Usuario', required: true })
    usuario: Usuario;

    @Prop({ required: true }) codigo: number;
    @Prop({ required: true }) descricao: string;    
    @Prop({ required: true}) tipo: string;    
    @Prop({ default: Date}) inclusao: Date;
}

export const CategoriaSchema = SchemaFactory.createForClass(Categoria);
