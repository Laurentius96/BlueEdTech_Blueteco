import { Injectable, ConflictException } from '@nestjs/common';
// 7°) Importando o CreateUserDto e o PrismaService...
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

// 10°) Use: 'npm i bcrypt' e o 'npm i -D @types/bcrypt' para pacotes de criptografia e fazer a importação...
import * as bcrypt from 'bcrypt';

// 21°) Importando o User...
import { User } from '@prisma/client';

// 27°) Importando o UserDto...
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  // 8°) Criando um construtor com o PrismaService...
  constructor(private prismaService: PrismaService) {}

  // 9°) Método create...
  async create(createUserDto: CreateUserDto) {
    // se ele achar um usuário, vai retornar o usuário...
    // se ele não achar nada, a variável vai ser undefind...
    const userEmailExists = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (userEmailExists) {
      throw new ConflictException('Email já cadastrado');
    }
    if (createUserDto.senha !== createUserDto.senhaConfirmacao) {
      throw new ConflictException('Senhas não são iguais');
    }

    delete createUserDto.senhaConfirmacao;

    // 11°) Criptografia da senha criada pelo usuário...
    const hashedPassword = await bcrypt.hash(createUserDto.senha, 10);

    // 12°) Criando um user com a senha criptografada e colocando no banco de dados...
    const createdUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        senha: hashedPassword,
      },
    });

    delete createdUser.senha;

    return createdUser;
  }

  // 19°) Método findMany...
  async findMany(): Promise<UserDto[]> {
    const users = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        funcao: true,
        nacimento: true,
        imagemUrl: true,
        createAt: true,
        updateAt: true,
      },
    });
    return users;
  }
}

// OBS.01: Após o item 12°, vamos para o aquivo: user.controller.ts;
// OBS.02: Após o item 19°, vamos para o aquivo: user.controller.ts;
// OBS.03: Após o item 21°, vamos para o aquivo: user.controller.ts;

