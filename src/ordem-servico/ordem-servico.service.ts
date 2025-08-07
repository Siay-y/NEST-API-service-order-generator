import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdemServico } from './entities/ordem-servico.entity';
import { CreateOrdemServicoDto } from './dto/create-ordem-servico.dto';
import { UpdateOrdemServicoDto } from './dto/update-ordem-servico.dto';

@Injectable()
export class OrdemServicoService {
  constructor(
    @InjectRepository(OrdemServico)
    private repo: Repository<OrdemServico>,
  ) {}

  create(dto: CreateOrdemServicoDto) {
    const os = this.repo.create(dto);
    return this.repo.save(os);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const os = await this.repo.findOne({ where: { id } });
    if (!os) throw new NotFoundException('Ordem de serviço não encontrada');
    return os;
  }

  async update(id: number, dto: UpdateOrdemServicoDto) {
    await this.findOne(id);
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.repo.delete(id);
  }
}
