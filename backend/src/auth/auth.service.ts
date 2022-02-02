import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

// 41°) Impostando o PrismaService...
import { PrismaService } from 'src/prisma.service';

// 44°) Importando o LoginInputDto...
import { LoginInputDto } from './dto/login-input.dto';

// 47°)
import * as bcrypt from 'bcrypt';

// 48°) Importando o JwtService...
import { JwtService } from '@nestjs/jwt';

// 56°) Importando o LoginResponseDto...
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  // 42°)  Criando o constructor...
  constructor(
    private prismaService: PrismaService,
    // 49°)
    private jwtService: JwtService,
  ) {}

  // 46°) Complementado...
  async login(loginInputDto: LoginInputDto) {
    const { email, senha } = loginInputDto;

    const userExists = await this.prismaService.user.findUnique({
      where: { email: loginInputDto.email },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isHashValid = await bcrypt.compare(senha, userExists.senha);

    if (!isHashValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    delete userExists.senha;

    // 50°)
    return {
      token: this.jwtService.sign({ email }),
      user: userExists,
    };
  }
}

// OBS.01: Após o item 42°, foi criada a pasta dto assim como os arquivos: login-input.dto.ts e login-response.dto.ts e vamso para o login-input;
// OBS.02: Após o item 50°, vamos para o arquivo: auth.module.ts
// OBS.03: Após o item 56°, vamos para o arquivo: auth.controller.ts
