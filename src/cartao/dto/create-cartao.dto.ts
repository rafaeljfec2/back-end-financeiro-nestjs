import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity";

export class CreateCartaoDto {    
    
    @IsNotEmpty()        
    usuario: Usuario;  

    @IsNotEmpty() @IsString()
    descricao: string;

    @IsNotEmpty() @IsString()
    nomeimpresso : string;

    @IsNotEmpty() @IsString()
    bandeira : string;

    @IsNotEmpty() @IsNumber()
    numero : number;

    @IsNotEmpty() @IsString()
    tipo: string;

    inclusao: Date;
}
