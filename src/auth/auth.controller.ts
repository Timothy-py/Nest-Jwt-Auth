import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('local/signup')
    @HttpCode(201)
    signupLocal(@Body() dto:AuthDto): Promise<Tokens>{
        return this.authService.signupLocal(dto)
    }

    @Post('local/signin')
    @HttpCode(200)
    signinLocal(@Body() dto:AuthDto): Promise<Tokens>{
        return this.authService.signinLocal(dto)
    }

    @Post('logout')
    @HttpCode(200)
    logout(){
        this.authService.logout()
    }

    @Post('refresh')
    @HttpCode(200)
    refreshTokens(){
        this.authService.refreshTokens()
    }
}
