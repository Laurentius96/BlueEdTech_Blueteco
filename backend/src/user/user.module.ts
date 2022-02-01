import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// 4°) Importando o módulo do Prisma Service...
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UserController],
  // 5°) Add o PrismaService nas providers...
  providers: [UserService, PrismaService],
})
export class UserModule {}

// OBS.01: Após o item 5° seguimos criando o arquivo dto e dentro dele criamos os aqueivos crete-user.dto.ts, update-user.dto.ts, user-update.dto.ts
// OBS.02: após a criaçãodos itens faldos na OBS.01 seguimos para: crete-user.dto.ts
