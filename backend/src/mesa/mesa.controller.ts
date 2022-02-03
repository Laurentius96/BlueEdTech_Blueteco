import { Controller, UseGuards, Post, Body, Get } from '@nestjs/common';
import { MesaService } from './mesa.service';

// 94° Importações...
import { CreateMesaDto } from './dto/create-mesa.dto';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { User, Mesa } from '@prisma/client';

// 126°) Importando...
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

// 127°) Add o @ApiTags('mesa')...
@ApiTags('mesa')
@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  // 95°) Fazendo a rota do create Mesa com @Post...
  @Post()
  // 128°) Add ApiOperation...
  @ApiOperation({
    summary: 'Criar uma mesa',
  })
  // 129°) Add o @ApiBearerAuth(), por causa do Token - @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  create(
    @Body() createMesaDto: CreateMesaDto,
    @LoggedUser() user: User,
  ): Promise<Mesa> {
    return this.mesaService.create(createMesaDto, user.id);
  }

  // 97°) Fazendo a rota do findMany Mesas com @Get...
  @Get()
  // 130°) Add ApiOperation...
  @ApiOperation({
    summary: 'Listar todas mesas disponíveis',
  })
  findMany(): Promise<Mesa[]> {
    return this.mesaService.findMany();
  }
}

// OBS.01: Após o item 95° seguimos para o arquivo: mesa.service.ts
// OBS: Após o 97° vamos configurar o Sweeger: https://docs.nestjs.com/openapi/introduction - usamos:  npm install --save @nestjs/swagger swagger-ui-express e vamos no main.ts


