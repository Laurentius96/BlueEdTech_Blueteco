// 43°) Importando as vaslidações...
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// 44°) Exportando a classe LoginInputDto...
export class LoginInputDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  senha: string;
}

// OBS.01: Após o item 44°, seguimos para o arquivo: uth.service.ts 