import { Module } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { MesaController } from './mesa.controller';
// 86°) Importando o PassportModule...
import { PassportModule } from '@nestjs/passport';
// 87°) Importando o Prisma Service...
import { PrismaService } from 'src/prisma.service';

@Module({
  // 85°) Após ir no "user.modele.ts" copiamos o imports e colamos abaixo...
  imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [MesaController],
  // 88°) Add o PrismaService...
  providers: [MesaService, PrismaService],
})
export class MesaModule {}

// OBS.01: Após o item 88°, criamos uma pasta dto em mesa e criamos o documento: create-mesa.dto.ts e segumos com ela;
