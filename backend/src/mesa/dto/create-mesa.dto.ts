// 90°) Fazemos as importações...
import { IsNotEmpty, IsNumber } from 'class-validator';

// 89°) Criamos a exportação do CreateMesaDto...
export class CreateMesaDto {
  @IsNotEmpty()
  @IsNumber()
  numeracao: number;

  @IsNotEmpty()
  @IsNumber()
  nPessoas: number;
}

// OBS.01: Após o item 90°, segumos para o arquivo: mesa.service.ts; 