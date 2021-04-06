import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from 'mongoose';
import { Usuario } from "src/usuario/entities/usuario.entity";

@Schema()
export class Cartao extends Document{                    

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'})
    usuario: Usuario;    
 
    @Prop({ required:true }) descricao: string;
    @Prop({ required:true }) nomeimpresso : string;    
    @Prop({ required:true }) bandeira : string;    
    @Prop({ required:true }) numero : number;
    @Prop({ required:true }) tipo: string;    
    @Prop({ default: Date}) inclusao: Date;    
}

export const CartaoSchema = SchemaFactory.createForClass(Cartao);