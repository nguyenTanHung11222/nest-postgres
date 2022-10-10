import { Module } from '@nestjs/common';
import { NuocUongService } from './NuocUong.service';
import { NuocUongController } from './NuocUong.controller';
import { NuocUong } from './entity/NuocUong.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  providers: [NuocUongService],
  controllers: [NuocUongController],
  imports: [
    TypeOrmModule.forFeature([NuocUong])]
})
export class NuocUongModule {}
