import { Module } from '@nestjs/common';
import { MonAnModule } from './monan/MonAn.module';
import { UserModule } from './nhanVien/nhanVien.module';
import { NuocUongModule } from './nuocuong/NuocUong.module';
import { KhuvucModule } from './khuvuc/khuvuc.module';
import { BanModule } from './ban/ban.module';
import { KhachhangModule } from './khachhang/khachhang.module';


@Module({
  imports: [UserModule , KhachhangModule,MonAnModule,NuocUongModule, KhuvucModule, BanModule],
})
export class ApiModule {}
