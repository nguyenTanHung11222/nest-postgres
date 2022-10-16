import { Test, TestingModule } from '@nestjs/testing';
import { DonDatBanController } from './don-dat-ban.controller';
import { DonDatBanService } from './don-dat-ban.service';

describe('DonDatBanController', () => {
  let controller: DonDatBanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonDatBanController],
      providers: [DonDatBanService],
    }).compile();

    controller = module.get<DonDatBanController>(DonDatBanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
