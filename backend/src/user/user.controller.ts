import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
// 13°) Importando o CreateUserDto...
import { CreateUserDto } from './dto/create-user.dto';

// 22°) Importando o User...
import { User } from '@prisma/client';

// 25°) Importando o UserDto...
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 14°) Criando a rota do Create com o @Post & @Body...
  @Post()
  // 23°) Atualizando o com o :Promise<User>...
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // 20°) Criando a rota do findMany com @Get
  @Get()
  // 26°) Add o {UserDto}...
  findMany(): Promise<UserDto[]> {
    return this.userService.findMany();
  }

  // 29°) Criando a rota do findUnique com @Get
  @Get(':id')
  findUnique(@Param('id') userId: string): Promise<User> {
    return this.userService.findUnique(userId);
  }
}

// OBS.01: Após o item 14°, seguimos para o arquivo: main.ts;
// OBS.02: Após o item 19°, seguimos para o arquivo: user.service.ts
// OBS.03: Após o item 23°, seguimos para o arquivo: user.dto.ts
// OBS.04: Após o item 26°, seguimos para o arquivo: user.service.ts
// OBS.05: Após o item 29°, seguimos para o arquivo: user.service.ts
