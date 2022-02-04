import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';

// 151°) Importações...
import { AuthGuard } from '@nestjs/passport';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { CreateMenuDto } from './dto/create-menu.dto';
import { Menu } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

// 152°) Add o @ApiTags('user')...
@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  // 153°) Rota create...
  @Post()
  @ApiOperation({
    summary: 'Cria um item para o menu',
  })
  create(@Body() createMenuDto: CreateMenuDto): Promise<Menu> {
    return this.menuService.create(createMenuDto);
  }

  // 154°) Rota findMany...
  @Get()
  @ApiOperation({
    summary: 'Listar todos os itens do menu',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  findMany(): Promise<Menu[]> {
    return this.menuService.findMany();
  }

  // 155°) Rota find unique...
  @Get(':id')
  @ApiOperation({
    summary: 'Listar um item do menu pelo seu id',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  findUnique(@Param('id') menuId: string): Promise<Menu> {
    return this.menuService.findUnique(menuId);
  }

  // 156°) Rota Update...
  @Patch()
  @ApiOperation({
    summary: 'Atualizar um item do menu',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  update(
    @Param('id') menuId: string,
    @Body() updateMenuDto: UpdateMenuDto,
  ): Promise<Menu> {
    return this.menuService.update(menuId, updateMenuDto);
  }

  // 157°) Rota Delete...
  @Delete()
  @ApiOperation({
    summary: 'Deletar um item do menu ',
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@Param('id') menuId: string) {
    return this.menuService.delete(menuId);
  }
}

// OBS.01: Após o item 157°, seguimos para o arquivo: 