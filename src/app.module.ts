import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule} from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { CartaoModule } from './cartao/cartao.module';
import { ContaModule } from './conta/conta.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ContarecorrenteModule } from './contarecorrente/contarecorrente.module';
import { RateioModule } from './rateio/rateio.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV === "test" ? ".env.testing" : ".env"      
    }),
    MongooseModule.forRoot(process.env.MONGO_URL,{ useNewUrlParser:true }),
    UsuarioModule,
    CartaoModule,
    ContaModule,
    CategoriaModule,
    ContarecorrenteModule,
    RateioModule,
    LancamentoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
