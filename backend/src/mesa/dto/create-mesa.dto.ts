// 90°) Fazemos as importações...
import { IsNotEmpty, IsNumber } from 'class-validator';

// 124°) Importando o ApiProperty ...
import { ApiProperty } from '@nestjs/swagger';

// 89°) Criamos a exportação do CreateMesaDto...
export class CreateMesaDto {
  // 125°) Add o  @ApiProperty() para todos...
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  numeracao: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  nPessoas: number;
}

// OBS.01: Após o item 90°, seguimos para o arquivo: mesa.service.ts; 
// OBS.02: Após o item 125°, seguimos para o arquivo: mesa.contrller.ts; 