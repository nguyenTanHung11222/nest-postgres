import { Test, TestingModule } from '@nestjs/testing';
import { DonDatBanService } from './don-dat-ban.service';

describe('DonDatBanService', () => {
  let service: DonDatBanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonDatBanService],
    }).compile();

    service = module.get<DonDatBanService>(DonDatBanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
