import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
// 7°) Importando o CreateUserDto e o PrismaService...
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

// 10°) Use: 'npm i bcrypt' e o 'npm i -D @types/bcrypt' para pacotes de criptografia e fazer a importação...
import * as bcrypt from 'bcrypt';

// 21°) Importando o User...
import { User } from '@prisma/client';

// 27°) Importando o UserDto...
import { UserDto } from './dto/user.dto';

// 33°) Importando o UpdateUserDto
import { UpdateUserDto } from './dto/update-user.dto';

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

  // 28°) Método findUnique...
  async findUnique(userId: string): Promise<User> {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrado');
    }
    delete userFinded.senha;
    return userFinded;
  }

  // 30°) Método update...
  async update(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrado');
    }

    // Vamos para o arquivo: update-user.dto.this

    // 32°) Verificando se o email criado já existe no banco de dados...
    if (updateUserDto.email) {
      const emailExists = await this.prismaService.user.findUnique({
        where: {
          email: updateUserDto.email,
        },
      });

      if (emailExists) {
        throw new ConflictException('Email já cadastrado');
      }
    }

    const updatedUser = await this.prismaService.user.update({
      where: { id: userId },
      data: {
        email: updateUserDto.email,
        name: updateUserDto.name,
        funcao: updateUserDto.funcao,
        nacimento: updateUserDto.nacimento,
        imagemUrl: updateUserDto.imagemUrl,
      },
    });

    delete updatedUser.senha;

    return updatedUser;
  }

  // 36°) Método delete...
  async delete(userId: string) {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrador');
    }

    const deletedUser = await this.prismaService.user.delete({
      where: {
        id: userId,
      },
    });

    delete deletedUser.senha;

    return deletedUser;
  }
}

// OBS.01: Após o item 12°, vamos para o aquivo: user.controller.ts;
// OBS.02: Após o item 19°, vamos para o aquivo: user.controller.ts;
// OBS.03: Após o item 21°, vamos para o aquivo: user.controller.ts;
// OBS.04: Após o item 28°, vamos para o aquivo: user.controller.ts;
// OBS.05: Após o item 33°, vamos para o aquivo: user.controller.ts;
// OBS.06: Após o item 36°, vamos para o aquivo: user.controller.ts;
