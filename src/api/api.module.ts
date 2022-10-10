import { Module } from '@nestjs/common';
import { MonAnModule } from './monan/MonAn.module';
import { UserModule } from './nhanVien/nhanVien.module';
import { NuocUongModule } from './nuocuong/NuocUong.module';
import { KhuvucModule } from './khuvuc/khuvuc.module';
import { BanModule } from './ban/ban.module';


@Module({
  imports: [UserModule,MonAnModule,NuocUongModule, KhuvucModule, BanModule],
})
export class ApiModule {}
