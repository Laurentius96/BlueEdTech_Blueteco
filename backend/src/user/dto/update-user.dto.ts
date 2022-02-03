// 31°) mportando as validações, criando e exportando a classe UpdateUserDto...
import {
  IsString,
  IsEmail,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
// 104°) Importando o ApiProperty...
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  // 105°) Add o @ApiProperty() em todos..
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  funcao: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  nacimento: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  @ApiProperty()
  imagemUrl: string;
}

// OBS.01: Após o item 31°, seguimos para o arquivo: user.service.ts
// OBS.02: Após o item 105°, seguimos para o arquivo: user.controller.ts

