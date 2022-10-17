import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

import { CreateNuocUongDto, UpdateNuocUongDto } from './dto/NuocUong.dto';
import { NuocUong } from './entities/NuocUong.entities';
import { NuocUongService } from './NuocUong.service';

@ApiTags('NuocUong')
@Controller('NuocUong')
export class NuocUongController {
    @Inject(NuocUongService)
  private readonly service: NuocUongService;

  @Get()
  async getAll(){
    return this.service.getAllNuocUong();
  }

  @Get(':id')
  public getNuocUong(@Param('id', ParseIntPipe) id: number): Promise<NuocUong> {
    return this.service.getNuocUong(id);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  public createNuocUong(@Body() body: CreateNuocUongDto): Promise<NuocUong> {
    return this.service.createNuocUong(body);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() user: UpdateNuocUongDto) {
    return this.service.updateNuocUong(Number(id), user);
  }

}
