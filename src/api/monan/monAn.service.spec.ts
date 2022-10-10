import { Test, TestingModule } from '@nestjs/testing';
import { MonAnService } from './monAn.service';

describe('MonanService', () => {
  let service: MonAnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonAnService],
    }).compile();

    service = module.get<MonAnService>(MonAnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
