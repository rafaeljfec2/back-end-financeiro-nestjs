import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Usuario } from "src/usuario/entities/usuario.entity"

export class CreateRateioDto {
    
    @IsNotEmpty()
    usuario: Usuario;
    
    @IsNotEmpty()
    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsNumber()
    porcentagem: number;   

    @IsDate()               
    inclusao: Date;
}
