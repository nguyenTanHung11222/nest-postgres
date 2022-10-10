import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';

import { CreateKhuVucDto, UpdateKhuVucDto } from './dto/khuvuc.dto';
import { KhuVuc } from './entity/khuvuc.entity';
import { KhuvucService } from './khuvuc.service';

@ApiTags('khuvuc')
@Controller('khuvuc')
export class KhuvucController {
    @Inject(KhuvucService)
    private readonly service: KhuvucService;
  
    @Get()
    async getAll(){
      return this.service.getAllkhuvuc();
    }
  
    @Get(':id')
    public getkhuvuc(@Param('id', ParseIntPipe) id: number): Promise<KhuVuc> {
      return this.service.getkhuvuc(id);
    }
  
    @Post()
    @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    public createkhuvuc(@Body() body: CreateKhuVucDto): Promise<KhuVuc> {
      return this.service.createkhuvuc(body);
    }
  
    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() user: UpdateKhuVucDto) {
      return this.service.updatekhuvuc(Number(id), user);
    }
  


}
