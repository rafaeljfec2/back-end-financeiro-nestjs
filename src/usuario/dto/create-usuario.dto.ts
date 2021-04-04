import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    nome: string;    
    
    cpf: string;
    celular: string;
    anivesario: Date;            
    confirmado: string;
    avatar: string;
    inclusao: Date;  
}
