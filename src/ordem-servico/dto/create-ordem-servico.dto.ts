import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrdemServicoDto {
  @IsString()
  @IsNotEmpty()
  nomeCliente: string;

  @IsString()
  telefone: string;

  @IsString()
  numero: string;

  @IsString()
  bairro: string;

  @IsString()
  cidade: string;

  @IsNumber()
  quantidade: number;

  @IsString()
  tipo: string;

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  defeito: string;

  @IsString()
  servicoRealizado: string;

  @IsNumber()
  valor: number;

  @IsString()
  formaPagamento: string;

  @IsString()
  tecnico: string;
}
