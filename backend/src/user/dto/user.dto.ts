// 24°) Importando as validações, criando e exportando a classe UserDto
import { IsString, IsNotEmpty, IsEmail, IsUrl, IsDate } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nacimento: string;

  @IsString()
  @IsNotEmpty()
  funcao: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  imagemUrl: string;

  @IsString()
  @IsNotEmpty()
  @IsDate()
  createAt: Date;

  @IsString()
  @IsNotEmpty()
  @IsDate()
  updateAt: Date;
}

// OBS.01: Após o item 24°, seguimos para o arquivo: user.controller.ts
