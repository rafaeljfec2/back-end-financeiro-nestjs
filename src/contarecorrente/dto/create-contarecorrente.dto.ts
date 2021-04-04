import { IsDate, IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Decimal128 } from "mongoose";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Conta } from "src/conta/entities/conta.entity";
import { Usuario } from "src/usuario/entities/usuario.entity"

export class CreateContarecorrenteDto {
    
    @IsNotEmpty()
    usuario: Usuario;

    @IsNotEmpty()
    conta: Conta;

    @IsNotEmpty()
    categoria: Categoria;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsNumber()
    vencimento: number;

    @IsNotEmpty()
    @IsDecimal()
    valor: Decimal128;

    @IsNotEmpty()
    @IsNumber()
    parcelamento: number;            

    @IsNotEmpty()
    @IsString()
    tipo: string;
    
    @IsDate()
    inclusao: Date;
}
