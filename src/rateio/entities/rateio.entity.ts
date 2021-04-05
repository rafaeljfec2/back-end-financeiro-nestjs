import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Usuario } from "src/usuario/entities/usuario.entity";
import * as mongoose from 'mongoose';

@Schema()
export class Rateio extends mongoose.Document{
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'})
    usuario: Usuario;

    @Prop({ required: true }) descricao: string;    
    @Prop({ required: true }) porcentagem: number;              
    @Prop({ default: Date }) inclusao: Date;
}

export const RateioSchema = SchemaFactory.createForClass(Rateio);

