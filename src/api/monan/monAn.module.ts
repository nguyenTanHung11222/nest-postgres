import { Module } from '@nestjs/common';
import { MonAnService } from './monAn.service';
import { MonAnController } from './monAn.controller';
import { MonAn } from './entities/monAn.entities';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  providers: [MonAnService],
  controllers: [MonAnController],
  imports: [
    TypeOrmModule.forFeature([MonAn])]
})
export class MonAnModule {}
