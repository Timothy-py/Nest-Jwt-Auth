import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { AtGuard, RtGuard } from './guard';
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

    @UseGuards(AtGuard)
    @Post('logout')
    @HttpCode(200)
    logout(@Req() req: Request){
        const user = req.user.sub
        this.authService.logout(user.sub)
    }

    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(200)
    refreshTokens(){
        this.authService.refreshTokens()
    }
}
