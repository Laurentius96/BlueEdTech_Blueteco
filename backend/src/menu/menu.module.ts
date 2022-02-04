import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';

// 131°) Importando o PassportModule...
import { PassportModule } from '@nestjs/passport';

// 132°) Importando o Prisma Service...
import { PrismaService } from 'src/prisma.service';

@Module({
  // 133°) Após ir no "user.modele.ts" copiamos o imports e colamos abaixo...
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [MenuController],
  // 134°) Add o PrismaService...
  providers: [MenuService, PrismaService],
})
export class MenuModule {}

// OBS.01: Após o item 134°, seguimos para o arquivo: create-menu.dto.ts