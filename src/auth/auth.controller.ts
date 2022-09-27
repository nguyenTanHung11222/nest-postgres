import { Body, Req, Controller, HttpCode, Post, UseGuards, Res, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import {CreateUserDto} from '../api/nhanVien/dto/nhanVien.dto';
import {Response} from 'express' ;
import { LocalAuthGuard } from './localAuth.guard';
import RequestWithUser from './requestWithUser.interface';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import JwtAuthGuard from './jwt-auth.guard';
@ApiTags('Đăng Nhập')
@Controller('authentication')
export class AuthController {
  constructor(
    private readonly authenticationService: AuthService
  ) {}
 
  @Post('register')
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  async register(@Body() registrationData: CreateUserDto) {
    return this.authenticationService.register(registrationData);
  }
 
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('log-in')
  async logIn(@Body() request: RequestWithUser, @Res() response: Response) {
    const {user} = request;
    const cookie = this.authenticationService.getCookieWithJwtToken(user.id);
    response.setHeader('Set-Cookie', cookie);
    user.MatKhau = undefined;
    return response.send(user);
  }
  @UseGuards(JwtAuthGuard)
  @Post('log-out')
  async logOut(@Req() request: RequestWithUser, @Res() response: Response) {
    response.setHeader('Set-Cookie', this.authenticationService.getCookieForLogOut());
    return response.sendStatus(200);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.MatKhau = undefined;
    return user;
  }
}