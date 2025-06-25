import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
      issuer: configService.get('AUTH0_ISSUER_BASE_URL'),
      audience: 'http://localhost:3000',
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.name,
      role: payload['http://schemas/roles'] || 'gardien', // claims personnalisés
    };
  }
}
