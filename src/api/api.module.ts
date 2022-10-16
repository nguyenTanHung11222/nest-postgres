import { Module } from '@nestjs/common';
import { MonAnModule } from './monan/MonAn.module';
import { UserModule } from './nhanVien/nhanVien.module';
import { NuocUongModule } from './nuocuong/NuocUong.module';
import { KhuvucModule } from './khuvuc/khuvuc.module';
import { BanModule } from './ban/ban.module';
import { KhachhangModule } from './khachhang/khachhang.module';
import { HoaDonModule } from './hoa-don/hoa-don.module';
import { DonDatBanModule } from './don-dat-ban/don-dat-ban.module';
import { ChiTietHoaDonModule } from './chi-tiet-hoa-don/chi-tiet-hoa-don.module';


@Module({
  imports: [UserModule , KhachhangModule,MonAnModule,NuocUongModule, KhuvucModule, BanModule, HoaDonModule, DonDatBanModule, ChiTietHoaDonModule],
})
export class ApiModule {}
