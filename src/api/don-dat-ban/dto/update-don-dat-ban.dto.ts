import { PartialType } from '@nestjs/swagger';
import { CreateDonDatBanDto } from './create-don-dat-ban.dto';

export class UpdateDonDatBanDto extends PartialType(CreateDonDatBanDto) {}
