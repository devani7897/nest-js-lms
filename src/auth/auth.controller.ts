/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')
export class AuthController {
 constructor(private readonly AuthService: AuthService) {}
  @Post('register')
  register(@Body() registerUserDto: RegisterDto) {
    const response = this.AuthService.registerUser(registerUserDto);
    return response;
  }
  @Post('login')
  login() {
    const response = this.AuthService.loginUser();
    return response;
  }
}
