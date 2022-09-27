import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import JwtAuthGuard from 'src/auth/jwt-auth.guard';
import { CreateUserDto, LoginUserDto, UpdateUserDto } from './dto/nhanVien.dto';
import { User } from './entity/nhanVien.entity';
import { UserService } from './nhanVien.service';
@ApiTags('User')
@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Get()
  async getAll(){
    return this.service.getAllUser();
  }

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.getUser(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updatePost(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.service.updateUser(Number(id), user);
  }

}