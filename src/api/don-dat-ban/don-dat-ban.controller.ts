import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DonDatBanService } from './don-dat-ban.service';
import { CreateDonDatBanDto } from './dto/create-don-dat-ban.dto';
import { UpdateDonDatBanDto } from './dto/update-don-dat-ban.dto';

@Controller('don-dat-ban')
export class DonDatBanController {
  constructor(private readonly donDatBanService: DonDatBanService) {}

  @Post()
  create(@Body() createDonDatBanDto: CreateDonDatBanDto) {
    return this.donDatBanService.create(createDonDatBanDto);
  }

  @Get()
  findAll() {
    return this.donDatBanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donDatBanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonDatBanDto: UpdateDonDatBanDto) {
    return this.donDatBanService.update(+id, updateDonDatBanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donDatBanService.remove(+id);
  }
}
