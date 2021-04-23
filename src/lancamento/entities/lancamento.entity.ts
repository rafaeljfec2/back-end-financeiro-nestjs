import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Cartao } from "src/cartao/entities/cartao.entity";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Conta } from "src/conta/entities/conta.entity";
import { Contarecorrente } from "src/contarecorrente/entities/contarecorrente.entity";
import { Rateio } from "src/rateio/entities/rateio.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import * as mongoose from 'mongoose';

@Schema()
class Anexo extends Document{
    descricao: string;
    link: string;
    inclusao: Date;
}

@Schema()
export class Lancamento extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Usuario'}) usuario: Usuario;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Cartao'}) cartao: Cartao;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Conta'}) conta: Conta;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Rateio'}) rateio: Rateio;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Categoria'}) categoria: Categoria;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref : 'Contarecorrente'}) contarecorrente: Contarecorrente;    
    @Prop({ required: true }) descricao: string;
    @Prop({ required: true }) lancamento: Date;
    @Prop({ required: true }) vencimento: Date;
    @Prop({ required: true }) quitacao: Date;
    @Prop({ required: true }) forma: string;
    @Prop({ required: true }) tipo: string;    
    @Prop({ required: true }) valor: mongoose.Schema.Types.Decimal128;    
    @Prop({ default: 'N' }) conciliado: string;
    @Prop() anexos: Anexo[];
    @Prop({ required: true }) obs: string;
    @Prop({ default: Date }) alteracao: Date;
}

export const LancamentoSchema = SchemaFactory.createForClass(Lancamento);
