import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { CreateKhachHangDto } from './dto/khachhang.dto';
import { KhachHang } from './entity/khachhang.entity';
import { KhachhangService } from './khachhang.service';
@ApiTags('khachhang')
@Controller('khachhang')
export class KhachhangController {
    @Inject(KhachhangService)
    private readonly service: KhachhangService;
  
    @Get()
    async getAll(){
      return this.service.getAllKhachHang();
    }
  
    @Get(':id')
    public getKhachHang(@Param('id', ParseIntPipe) id: number): Promise<KhachHang> {
      return this.service.getKhachHang(id);
    }
  
    @Post()
    @ApiCreatedResponse({ description: 'Created Succesfully' })
    @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
    @ApiForbiddenResponse({ description: 'Unauthorized Request' })
    public createKhachHang(@Body() body: CreateKhachHangDto): Promise<KhachHang> {
      return this.service.createKhachHang(body);
    }
  
    @Put(':id')
  //  @UseGuards(JwtAuthGuard)
    async updatePost(@Param('id') id: string, @Body() KhachHang: CreateKhachHangDto) {
      return this.service.updateKhachHang(Number(id), KhachHang);
    }
}