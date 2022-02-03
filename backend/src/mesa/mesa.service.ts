import { Injectable } from '@nestjs/common';
// 91°) Importando o Propertie, CreateMesaDto e o PrismaService...
import { PrismaService } from 'src/prisma.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { Mesa } from '@prisma/client';

@Injectable()
export class MesaService {
  // 92°) Criamos o consctructor...
  constructor(private prismaService: PrismaService) {}

  // 93°) Método Create...
  async create(createMesaDto: CreateMesaDto, userId: string): Promise<Mesa> {
    const createdMesa = await this.prismaService.mesa.create({
      data: {
        numeracao: createMesaDto.numeracao,
        nPessoas: createMesaDto.nPessoas,
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });
    return createdMesa;
  }

  // 96°) Método findMany...
  async findMany(): Promise<Mesa[]> {
    const mesas = await this.prismaService.mesa.findMany();
    return mesas;
  }
}

// OBS.01: Após o item 93°, seguimos para o arquivo: mesa.controller.ts;
// OBS.02: Após o item 96°, seguimos para o arquivo: mesa.controller.ts;
