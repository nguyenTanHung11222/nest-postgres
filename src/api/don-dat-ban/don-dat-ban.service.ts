import { Injectable } from '@nestjs/common';
import { CreateDonDatBanDto } from './dto/create-don-dat-ban.dto';
import { UpdateDonDatBanDto } from './dto/update-don-dat-ban.dto';

@Injectable()
export class DonDatBanService {
  create(createDonDatBanDto: CreateDonDatBanDto) {
    return 'This action adds a new donDatBan';
  }

  findAll() {
    return `This action returns all donDatBan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donDatBan`;
  }

  update(id: number, updateDonDatBanDto: UpdateDonDatBanDto) {
    return `This action updates a #${id} donDatBan`;
  }

  remove(id: number) {
    return `This action removes a #${id} donDatBan`;
  }
}
