import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 16°) Importando o ValidationPipe...
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 15°) Após usar o comando npm i --save class-validator class-transformer colocamos a linha de coódigo abaixo extraido da documentação: https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

// OBS.01: Após o item 16°, seguimos para o arquivo: create-user.dto.ts