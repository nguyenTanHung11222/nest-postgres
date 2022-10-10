import { Test, TestingModule } from '@nestjs/testing';
import { NuocUongService } from './NuocUong.service';

describe('MonanService', () => {
  let service: NuocUongService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NuocUongService],
    }).compile();

    service = module.get<NuocUongService>(NuocUongService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
