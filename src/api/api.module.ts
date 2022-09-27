import { Module } from '@nestjs/common';
import { MANUModule } from './monannuocuong/MANU.module';
import { UserModule } from './nhanVien/nhanVien.module';


@Module({
  imports: [UserModule,MANUModule],
})
export class ApiModule {}
