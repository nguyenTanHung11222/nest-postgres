import { Module } from '@nestjs/common';
import { KhachhangService } from './khachhang.service';
import { KhachhangController } from './khachhang.controller';
import { KhachHang } from './entity/khachhang.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([KhachHang])],
  providers: [KhachhangService],
  controllers: [KhachhangController],
})
export class KhachhangModule {}
