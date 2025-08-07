import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OrdemServico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCliente: string;

  @Column()
  telefone: string;

  @Column()
  numero: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  quantidade: number;

  @Column()
  tipo: string;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  defeito: string;

  @Column()
  servicoRealizado: string;

  @Column('decimal')
  valor: number;

  @Column()
  formaPagamento: string;

  @Column()
  tecnico: string;
}
