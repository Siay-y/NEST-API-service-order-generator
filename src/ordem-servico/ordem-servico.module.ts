import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdemServico } from './entities/ordem-servico.entity';
import { OrdemServicoService } from './ordem-servico.service';
import { OrdemServicoController } from './ordem-servico.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrdemServico])],
  controllers: [OrdemServicoController],
  providers: [OrdemServicoService],
})
export class OrdemServicoModule {}
