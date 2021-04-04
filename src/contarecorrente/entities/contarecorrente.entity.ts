import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Conta } from "src/conta/entities/conta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

@Schema()
export class Contarecorrente extends mongoose.Document {           
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Usuario'})
    usuario: Usuario;   

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Conta'})
    conta: Conta;    

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Categoria'})
    categoria: Categoria;

    @Prop({ required: true }) descricao: string;    
    @Prop({ required: true }) vencimento: number;    
    @Prop({ required: true }) valor: mongoose.Schema.Types.Decimal128;    
    @Prop({ required: true }) parcelamento: number;                
    @Prop({ required: true }) tipo: string;   
    @Prop({ default: Date}) inclusao: Date;
}

export const ContaRecorrenteSchema = SchemaFactory.createForClass(Contarecorrente);
