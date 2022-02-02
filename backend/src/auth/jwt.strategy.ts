// 40°) Pegamos do material do nestjs https://docs.nestjs.com/security/authentication#implement-protected-route-and-jwt-strategy-guards e modificamos ele...

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { jwtConstants } from './jwt.constants';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // Add o (private prismaService: PrismaService)...
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // Add o (email: string)...
  async validate(payload: { email: string }) {
    // Add a cosn e condições abaixo...
    const valitedUser = await this.prismaService.user.findUnique({
      where: { email: payload.email },
    });

    if (!valitedUser) {
      throw new NotFoundException('Usuário não encontrado ou não autenticado');
    }

    return valitedUser;
  }
}
