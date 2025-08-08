import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdemServicoDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsString()
  @IsNotEmpty()
  nomeCliente: string;

  @ApiProperty({ example: '(11) 99999-9999' })
  @IsString()
  telefone: string;

  @ApiProperty({ example: '123' })
  @IsString()
  numero: string;

  @ApiProperty({ example: 'Centro' })
  @IsString()
  bairro: string;

  @ApiProperty({ example: 'São Paulo' })
  @IsString()
  cidade: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  quantidade: number;

  @ApiProperty({ example: 'Celular' })
  @IsString()
  tipo: string;

  @ApiProperty({ example: 'Samsung' })
  @IsString()
  marca: string;

  @ApiProperty({ example: 'Galaxy S21' })
  @IsString()
  modelo: string;

  @ApiProperty({ example: 'Tela quebrada' })
  @IsString()
  defeito: string;

  @ApiProperty({ example: 'Troca de tela' })
  @IsString()
  servicoRealizado: string;

  @ApiProperty({ example: 350.5 })
  @IsNumber()
  valor: number;

  @ApiProperty({ example: 'Cartão de crédito' })
  @IsString()
  formaPagamento: string;

  @ApiProperty({ example: 'Carlos' })
  @IsString()
  tecnico: string;
}
