import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdemServicoModule } from './ordem-servico/ordem-servico.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'C7q=0of4!61`',
      database: 'ordem_servico_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    OrdemServicoModule,
  ],
})
export class AppModule {}
