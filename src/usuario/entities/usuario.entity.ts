import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Usuario extends Document {    
    @Prop({ required: true, unique: true }) 
    email : string; 

    @Prop({ required: true }) 
    password: string;
    
    @Prop({ required: true }) 
    nome: string;    
    
    @Prop() cpf: string;
    @Prop() celular: string;
    @Prop() anivesario: Date;            

    @Prop({ default: "N"}) 
    confirmado: string;
    
    @Prop({ default: Date}) 
    inclusao: Date;  
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);