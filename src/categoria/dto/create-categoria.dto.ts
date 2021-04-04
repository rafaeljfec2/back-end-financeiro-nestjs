import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateCategoriaDto {
    
    usuario: Usuario;

    @IsNotEmpty()
    @IsNumber()
    codigo: number;

    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsDate()
    inclusao: Date;
}
