import { Module } from '@nestjs/common';
import { KhuvucService } from './khuvuc.service';
import { KhuvucController } from './khuvuc.controller';
import { KhuVuc } from './entity/khuvuc.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [KhuvucService],
  controllers: [KhuvucController],
  imports: [
    TypeOrmModule.forFeature([KhuVuc])]
})
export class KhuvucModule {}
