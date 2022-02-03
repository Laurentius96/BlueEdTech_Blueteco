import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 16°) Importando o ValidationPipe...
import { ValidationPipe } from '@nestjs/common';
// 99°) Importando...
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 15°) Após usar o comando npm i --save class-validator class-transformer colocamos a linha de coódigo abaixo extraido da documentação: https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(new ValidationPipe());

  // 98°) Após copiar no material do nest colamos abaixo:
  const config = new DocumentBuilder()
    // 100°) Mudando o título...
    .setTitle('Blueteco - Lorenzo Bianchi')
    .setDescription('Trabalho de back-end do módulo 04 da Blue EdTech')
    .setVersion('1.0')
    // 101°) Add o .addBearerAuth()...
    .addBearerAuth()
    .addTag('blueteco')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

// OBS.01: Após o item 16°, seguimos para o arquivo: create-user.dto.ts;
// OBS.02: Após o item 101°, seguimos com a documentação e usamos: "npm rum start". Após vamos para o arquivo: create-user.dto.ts;
