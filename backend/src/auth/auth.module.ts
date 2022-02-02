import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// 39°) Importando o Prisma Service, JWTModule, jwtContants, PassportModule & colocando no @Module...
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';
import { PassportModule } from '@nestjs/passport';
// 51°) Importando o JwtStrategy
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  // Add o JwtStrategy...
  providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}

// OBS.01: Após o item 39° seguimos para o arquivo: jwt.strategy.ts
// OBS.02: Após o item 51° seguimos para o arquivo: auth.controller.ts
