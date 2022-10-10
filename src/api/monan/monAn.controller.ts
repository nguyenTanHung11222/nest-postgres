import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

import { CreateMonAnDto, UpdateMonAnDto } from './dto/monAn.dto';
import { MonAn } from './entity/monAn.entity';
import { MonAnService } from './monAn.service';

@ApiTags('MonAn')
@Controller('MonAn')
export class MonAnController {
    @Inject(MonAnService)
  private readonly service: MonAnService;

  @Get()
  async getAll(){
    return this.service.getAllMonAN();
  }

  @Get(':id')
  public getMonAn(@Param('id', ParseIntPipe) id: number): Promise<MonAn> {
    return this.service.getMonAn(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  public createMonAn(@Body() body: CreateMonAnDto): Promise<MonAn> {
    return this.service.createMonAn(body);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() user: UpdateMonAnDto) {
    return this.service.updateMonAn(Number(id), user);
  }

}
