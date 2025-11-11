/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService) {}
    // Logic for registering a user
    /**
     * 
     * 1. Check if email is allready exist
     * 2. Hash the password
     * 3. Store the user into DB
     * 4. Generate JWT Token
     * 5. Send token in response
     */
    async registerUser(registerUserDto:RegisterDto) {
    const Hash = await bcrypt.hash(registerUserDto.password,10);
    const user = await this.userService.createUser({...registerUserDto, password:Hash});
    console.log('Registered User:', user);
    return { message: 'User registered successfully', userId: user._id };
  }
  loginUser() {
    return { message: 'User logged in successfully' };
  }
}
