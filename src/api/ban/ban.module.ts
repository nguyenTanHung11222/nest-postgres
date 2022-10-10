import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanController } from './ban.controller';
import { BanService } from './ban.service';
import { Ban } from './entity/ban.entity';

@Module({
  controllers: [BanController],
  providers: [BanService],
  imports: [
    TypeOrmModule.forFeature([Ban])]
})
export class BanModule {}
