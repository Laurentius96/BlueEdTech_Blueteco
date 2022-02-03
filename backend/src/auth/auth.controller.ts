import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
// 52°) Importando LoginInputDto...
import { LoginInputDto } from './dto/login-input.dto';

// 57°) Importando LoginResponseDto e colocamos no @Post ...
import { LoginResponseDto } from './dto/login-response.dto';

// 59°) Após colocar o UseGuard na importação...
import { AuthGuard } from '@nestjs/passport';

// 65°) Importando o LoggedUser...
import { LoggedUser } from './logged-user.decorator';

// 67°) Importando o User...
import { User } from '@prisma/client';

// 119°) Importando...
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';

// 120°) Add o @ApiTags('auth')
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 53°) Criando a rota de login com @Post...
  @Post()
  // 121°) Add ApiOperation...
  @ApiOperation({
    summary: 'Fazer login',
  })
  login(@Body() loginInputDto: LoginInputDto): Promise<LoginResponseDto> {
    return this.authService.login(loginInputDto);
  }

  // 58°) Criando a rota do usuário com @Get...
  @Get()
  // 122°) Add ApiOperation...
  @ApiOperation({
    summary: 'Perfil do usuário logado',
  })
  // 123°) Add o @ApiBearerAuth(), por causa do Token - @UseGuards(AuthGuard())
  @ApiBearerAuth()
  // 60°) Colocando o UseGuards...
  @UseGuards(AuthGuard())
  // 66°) Após criar o decorator...
  me(@LoggedUser() user: User) {
    return user;
  }
}

// OBS.01: Após o item 53°, seguimos para o arquivo: login-response.dto.ts;
// OBS.02: Após o item 60°, seguimos para o arquivo: logged-user.decorator.ts (este que foi);
// OBS.03: Após o item 67°, seguimos para o arquivo: use.moduele.ts;
// OBS.04: Após o item 123°, seguimos para o arquivo: create-mesa.dto.ts;
