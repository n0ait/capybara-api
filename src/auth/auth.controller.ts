import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login.input';
import { RefreshTokenInput } from './dto/refresh-token.input';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  async login(@Body() auth: LoginInput) {
    return await this.auth.login(auth.email, auth.password);
  }

  @Post('refresh-token')
  refreshToken(@Body() body: RefreshTokenInput) {
    return this.auth.refreshToken(body.token);
  }
}
