import { IsDate, IsDecimal, IsNotEmpty, IsString } from "class-validator";
import { Decimal128 } from "mongoose";
import { Cartao } from "src/cartao/entities/cartao.entity";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Conta } from "src/conta/entities/conta.entity";
import { Contarecorrente } from "src/contarecorrente/entities/contarecorrente.entity";
import { Rateio } from "src/rateio/entities/rateio.entity";
import { Usuario } from "src/usuario/entities/usuario.entity"

export class AnexoDto{
    descricao: string;
    link: string;
    inclusao: Date;
}

export class CreateLancamentoDto {
    
    @IsNotEmpty()
    usuario: Usuario;

    @IsNotEmpty()
    cartao: Cartao;

    @IsNotEmpty()
    conta: Conta;

    @IsNotEmpty()
    rateio: Rateio;

    @IsNotEmpty()
    categoria: Categoria;

    @IsNotEmpty()
    contarecorrente: Contarecorrente;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    lancamento: Date;

    @IsNotEmpty()
    vencimento: Date;

    @IsNotEmpty()    
    quitacao: Date;

    @IsNotEmpty()
    @IsString()
    forma: string;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsNotEmpty()
    @IsDecimal()
    valor: Decimal128;

    @IsNotEmpty()
    @IsString()
    conciliado: string;

    @IsNotEmpty()    
    anexos:AnexoDto[];

    @IsNotEmpty()
    @IsString()
    obs: string;
    alteracao: Date;
}
