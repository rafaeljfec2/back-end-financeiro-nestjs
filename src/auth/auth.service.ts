import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class AuthService {
    constructor (private usuarioService: UsuarioService){}

    async validateUser(email: string, pass: string): Promise<any>{
        const usuario = await this.usuarioService.findAuthUser(email);

        if (usuario && bcrypt.compareSync(pass, usuario.password)) {
            const { password, ...result } = usuario;
            return result;
        }
        return null
    }
}
