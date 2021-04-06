import { IsDate, IsDecimal, IsNotEmpty, IsString } from "class-validator";
import { Schema } from "mongoose";
import { Usuario } from "src/usuario/entities/usuario.entity"


export class CreateContaDto{
    
    @IsNotEmpty()
    usuario : Usuario;

    @IsNotEmpty() @IsString()
    descricao: string;

    @IsNotEmpty() @IsString()
    agencia: string;

    @IsNotEmpty() @IsString()
    numero: string;

    @IsNotEmpty() @IsDecimal()
    saldoinicial: Schema.Types.Decimal128;

    @IsNotEmpty()
    datasaldoinicial: Date;

    @IsNotEmpty() @IsString()
    tipo: string;    

    @IsDate()
    inclusao: Date;
}
