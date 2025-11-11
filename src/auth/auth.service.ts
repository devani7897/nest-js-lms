/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

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
  registerUser() {
    const response = this.userService.createUser();
    return response;
  }
  loginUser() {
    return { message: 'User logged in successfully' };
  }
}
