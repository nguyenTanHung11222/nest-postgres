import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

import { CreateMANUDto, UpdateMANUDto } from './dto/MANU.dto';
import { MANU } from './entity/MANU.entity';
import { MANUService } from './MANU.service';

@ApiTags('MANU')
@Controller('MANU')
export class MANUController {
    @Inject(MANUService)
  private readonly service: MANUService;

  @Get()
  async getAll(){
    return this.service.getAllMANU();
  }

  @Get(':id')
  public getMANU(@Param('id', ParseIntPipe) id: number): Promise<MANU> {
    return this.service.getMANU(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  public createMANU(@Body() body: CreateMANUDto): Promise<MANU> {
    return this.service.createMANU(body);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() user: UpdateMANUDto) {
    return this.service.updateMANU(Number(id), user);
  }

}
