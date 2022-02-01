// 17°) Importando as validações...
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsUrl,
} from 'class-validator';

//  6°) Após criar a pasta dto, criamos e vamos exportar o CreateUserDto...
export class CreateUserDto {
  // Usar o mesmo nome usado no model - (schema.prisma)...
  // 18°) Add as validações (@...)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter 6 ou mais dígitos' })
  senha: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  senhaConfirmacao: string;

  @IsString()
  @IsNotEmpty()
  nacimento: string;

  @IsString()
  @IsNotEmpty()
  funcao: string;

  @IsNotEmpty()
  @IsUrl()
  imagemUrl: string;
}

// OBS.: Após o item 6° vamos para o arquivo: user.service.ts
// OBS.: Após o item 18° vamos para o arquivo: user.service.ts