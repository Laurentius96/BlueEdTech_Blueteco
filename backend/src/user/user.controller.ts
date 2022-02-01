import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
// 13°) Importando o CreateUserDto...
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 14°) Criando a rota do Create com o @Post & @Body...
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}

// OBS.01: Após o item 14°, seguimos para o arquivo main.ts;