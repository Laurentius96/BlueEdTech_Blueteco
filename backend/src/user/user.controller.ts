import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
// 13°) Importando o CreateUserDto...
import { CreateUserDto } from './dto/create-user.dto';

// 22°) Importando o User...
import { User } from '@prisma/client';

// 25°) Importando o UserDto...
import { UserDto } from './dto/user.dto';

// 34°) Importando o UpdateUserDato...
import { UpdateUserDto } from './dto/update-user.dto';

// 70°) Após colocar o UseGuards na importação acima linha 1, importamos o UseGuard...
import { AuthGuard } from '@nestjs/passport';

// 75°) Importando LoggedUser...
import { LoggedUser } from 'src/auth/logged-user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 14°) Criando a rota do Create com o @Post & @Body...
  @Post()
  // 23°) Atualizando o com o :Promise<User>...
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // 20°) Criando a rota do findMany com @Get...
  @Get()
  // 71°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  // 26°) Add o {UserDto}...
  findMany(): Promise<UserDto[]> {
    return this.userService.findMany();
  }

  // 29°) Criando a rota do findUnique com @Get...
  @Get(':id')
  // 72°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  findUnique(@Param('id') userId: string): Promise<User> {
    return this.userService.findUnique(userId);
  }

  // 35°) Criando a rota do update com @Patch...
  @Patch()
  // 73°) Add o @UseGuards(AuthGuard())...
  // 76°) Retiramos o id do @Patch(':id')...
  @Patch()
  @UseGuards(AuthGuard())
  update(
    // 77°) Deletamos o "@Param('id') userId: string," e colocamos no lugar o '@LoggedUser() user: User'
    @LoggedUser() user: User,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    // 78°) Trocamos o 'userId' detrono dos () por 'user.id'
    return this.userService.update(user.id, updateUserDto);
  }

  // 37°) Criando a rota delete @Delete...
  // 79°) Retiramos o id do @Delete(':id')...
  @Delete()
  // 74°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  // 81°) Retiramos o "@Param('id') userId: string," dentro () e colocamos no lugar o '@LoggedUser() user: User' ...
  delete(@LoggedUser() user: User) {
    // 82°) Trocamos o 'userId' detrono dos () por 'user.id'...
    return this.userService.delete(user.id);
  }
}

// OBS.01: Após o item 14°, seguimos para o arquivo: main.ts;
// OBS.02: Após o item 19°, seguimos para o arquivo: user.service.ts;
// OBS.03: Após o item 23°, seguimos para o arquivo: user.dto.ts;
// OBS.04: Após o item 26°, seguimos para o arquivo: user.service.ts;
// OBS.05: Após o item 29°, seguimos para o arquivo: user.service.ts;
// OBS.06: Após o item 35°, seguimos para o arquivo: user.service.ts;
// OBS.07: Após o item 37°, seguimos criando a pasta auth na src e lá criamos os arquivos, controller, module, service e criamos algumns arquivos (jwt.constants.ts & jwt.strategy.ts) e vamos para o arquivo criado jwt.constants.ts
// OBS.08: Após o item 82°, seguimos para o arquivo: schema.prisma;
