import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,  
      secretOrKey: 'sfectoria',
    });
  }
  async validate(payload: any) { // payload est le contenu décodé du JWT, typiquement {id: ...}
    const user = await this.prisma.user.findUnique({
      where: { id: payload.id },
    });
    
    if (!user) {
      throw new UnauthorizedException(); 
    }

    return user; // Retourne l'utilisateur validé
  }
}
