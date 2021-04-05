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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@db/finance?authSource=admin',{ useNewUrlParser:true }),
    UsuarioModule,
    CartaoModule,
    ContaModule,
    CategoriaModule,
    ContarecorrenteModule,
    RateioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
