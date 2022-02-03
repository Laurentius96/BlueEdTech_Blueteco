import { Controller, UseGuards, Post, Body, Get } from '@nestjs/common';
import { MesaService } from './mesa.service';
// 94° Importações...
import { CreateMesaDto } from './dto/create-mesa.dto';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { User, Mesa } from '@prisma/client';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  // 95°) Fazendo a rota do create Mesa com @Post...
  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createMesaDto: CreateMesaDto, @LoggedUser() user: User) {
    return this.mesaService.create(createMesaDto, user.id);
  }

  // 97°) Find

}

// OBS.01: Após o item 95° seguimos para o arquivo: mesa.service.ts