import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Usuario } from "src/usuario/entities/usuario.entity";

@Schema()
export class Conta extends Document{
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true })
    usuario: Usuario;  

    @Prop({ required: true }) descricao: string;
    @Prop({ required: true }) agencia: string;
    @Prop({ required: true }) numero: string; 
    @Prop({ required: true }) saldoinicial: mongoose.Schema.Types.Decimal128; 
    @Prop({ required: true }) datasaldoinicial: Date; 
    @Prop({ required: true }) tipo: string;    
    
    @Prop({ default: Date})
    inclusao: Date;
}

export const ContaSchema = SchemaFactory.createForClass(Conta)