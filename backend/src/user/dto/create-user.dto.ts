// 17°) Importando as validações...
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsUrl,
} from 'class-validator';
// 102°) Importando o ApiProperty...
import { ApiProperty } from '@nestjs/swagger';

//  6°) Após criar a pasta dto, criamos e vamos exportar o CreateUserDto...
export class CreateUserDto {
  // Usar o mesmo nome usado no model - (schema.prisma)...
  // 18°) Add as validações (@...)
  // 103°) Add o @ApiProperty() em todos...
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter 6 ou mais dígitos' })
  @ApiProperty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  senhaConfirmacao: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  nacimento: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  funcao: string;

  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  imagemUrl: string;
}

// OBS.01: Após o item 6° vamos para o arquivo: user.service.ts
// OBS.02: Após o item 18° vamos para o arquivo: user.service.ts
// OBS.03: Após o item 103° vamos para o arquivo: update-user.dto.ts