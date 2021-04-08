import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (
        private usuarioService: UsuarioService,
        private jwtService: JwtService
    ){}

    async validateUser(email: string, pass: string): Promise<any>{
        const usuario = await this.usuarioService.findAuthUser(email);

        if (usuario && bcrypt.compareSync(pass, usuario.password)) {
            const { password, ...result } = usuario;
            return result;
        }
        return null
    }

    async login(user: any){
        const payload = { username: user.username, sub: user.userId }
        return{
            access_token: this.jwtService.sign(payload),
        }
    }
}
