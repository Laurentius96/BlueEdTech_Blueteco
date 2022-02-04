// 144°) Importando as validações...
import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

// 145°) Importando a ApiProperty...
import { ApiProperty } from '@nestjs/swagger';

// 147°) Criando e exportando o  UpdateMenuDto
export class UpdateMenuDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  item: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  preco: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  descricao: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  @ApiProperty()
  imagemUrl: string;
}

// OBS.01: Após o item 147°, seguimos para o arquivo: menu.service.ts;