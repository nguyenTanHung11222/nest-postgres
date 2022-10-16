import { Module } from '@nestjs/common';
import { DonDatBanService } from './don-dat-ban.service';
import { DonDatBanController } from './don-dat-ban.controller';

@Module({
  controllers: [DonDatBanController],
  providers: [DonDatBanService]
})
export class DonDatBanModule {}
