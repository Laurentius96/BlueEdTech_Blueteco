// 43°) Importando as vaslidações...
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// 117°) Importando o ApiProperty...
import { ApiProperty } from '@nestjs/swagger';

// 44°) Exportando a classe LoginInputDto...
export class LoginInputDto {
  // 118°) Add o @ApiProperty()...
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  senha: string;
}

// OBS.01: Após o item 44°, seguimos para o arquivo: uth.service.ts;
// OBS.02: Após o item 118°, seguimos para o arquivo: auth.controller.ts  