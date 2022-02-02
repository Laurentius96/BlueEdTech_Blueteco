import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// 4°) Importando o módulo do Prisma Service...
import { PrismaService } from 'src/prisma.service';

// 69°) importando o PassportModuledo Prisma Service...
import { PassportModule } from '@nestjs/passport';

@Module({
  // 68°) Criando o import e add o Passaport.Module...
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [UserController],
  // 5°) Add o PrismaService nas providers...
  providers: [UserService, PrismaService],
})
export class UserModule {}

// OBS.01: Após o item 5° seguimos criando o arquivo dto e dentro dele criamos os aqueivos crete-user.dto.ts, update-user.dto.ts, user-update.dto.ts;
// OBS.02: após a criação dos itens falados na OBS.01 seguimos para: crete-user.dto.ts;
// OBS.03: após o item 69° seguimos para o arquivo: user.controller.ts;