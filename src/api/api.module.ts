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
// import { ThucdonModule } from './thucdon/thucdon.module';
import { ThucdonModule } from './thucdon/thucdon.module';


@Module({
  imports: [UserModule , KhachhangModule, KhuvucModule, BanModule, HoaDonModule, DonDatBanModule, ChiTietHoaDonModule, ThucdonModule],
})
export class ApiModule {}
