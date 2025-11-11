/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
 constructor(private readonly AuthService: AuthService) {}
  @Post('register')
  register() {
    const response = this.AuthService.registerUser();
    return response;
  }
  @Post('login')
  login() {
    const response = this.AuthService.loginUser();
    return response;
  }
}
