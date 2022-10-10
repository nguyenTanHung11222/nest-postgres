import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { BanService } from './ban.service';


import { CreateBanDto, UpdateBanDto } from './dto/ban.dto';
import { Ban } from './entity/ban.entity';
@ApiTags('Ban')
@Controller('Ban')
export class BanController {
    @Inject(BanService)
    private readonly service: BanService;
  
    @Get()
    async getAll(){
      return this.service.getAllBan();
    }
  
    @Get(':id')
    public getBan(@Param('id', ParseIntPipe) id: number): Promise<Ban> {
      return this.service.getBan(id);
    }
  
    @Post()
    @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    public createBan(@Body() body: CreateBanDto): Promise<Ban> {
      return this.service.createBan(body);
    }
  
    @Put(':id')
    async updatePost(@Param('id') id: string, @Body() user: UpdateBanDto) {
      return this.service.updateBan(Number(id), user);
    }


}
