// 31°) mportando as validações, criando e exportando a classe UpdateUserDto...
import {
  IsString,
  IsEmail,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  funcao: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nacimento: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()
  imagemUrl: string;
}

// OBS.01: Após o item 31°, seguimos para o arquivo: user.service.ts
