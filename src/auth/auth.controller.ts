import { Body, Controller, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetCurrentUser, GetCurrentUserId, Public } from './decorators';
import { AuthDto } from './dto';
import { AtGuard, RtGuard } from './guard';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Public()
    @Post('local/signup')
    @HttpCode(201)
    signupLocal(@Body() dto:AuthDto): Promise<Tokens>{
        return this.authService.signupLocal(dto)
    }

    @Public()
    @Post('local/signin')
    @HttpCode(200)
    signinLocal(@Body() dto:AuthDto): Promise<Tokens>{
        return this.authService.signinLocal(dto)
    }

    @Post('logout')
    @HttpCode(200)
    logout(@GetCurrentUserId() userId:number){
        return this.authService.logout(userId)
    }

    @Public()
    @UseGuards(RtGuard)
    @Post('refresh')
    @HttpCode(200)
    refreshTokens(
        @GetCurrentUserId() userId: number,
        @GetCurrentUser('refreshToken') refreshToken: string
    ){
        return this.authService.refreshTokens(userId, refreshToken)
    }
}
