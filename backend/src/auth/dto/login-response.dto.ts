// 54°) Importando o User e as vaslidações...
import { User } from '@prisma/client';
import { IsString, IsNotEmpty } from 'class-validator';

// 55°) Exportando LoginResponseDto
export class LoginResponseDto {
    @IsString()
    @IsNotEmpty()
    token: string;
  
    @IsNotEmpty()
    user: User;
  }

  // OBS.01: Após o item 55°, seguimos para o arquivo: auth.service.ts