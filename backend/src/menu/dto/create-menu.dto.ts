// 135°) Importamos as validações...
import { IsString, IsNotEmpty, IsNumber, IsUrl } from 'class-validator';

// 136°) Importamos a ApiProperty...
import { ApiProperty } from '@nestjs/swagger';

// 137°) Criamos a exportação do dto CreateMenuDto
export class CreateMenuDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  item: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  preco: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  imagemUrl: string;
}

// OBS.01: Após o item 137°, seguimos para o arquivo: menu.service.ts
