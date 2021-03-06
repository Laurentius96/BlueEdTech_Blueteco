// 3°) Add código copiado direto da documentação do prisma - https://docs.nestjs.com/recipes/prisma
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

//OBS: Após o item 3° seguimos para o arquivo: user.module.ts
