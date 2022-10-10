import { Test, TestingModule } from '@nestjs/testing';
import { KhuvucService } from './khuvuc.service';

describe('KhuvucService', () => {
  let service: KhuvucService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KhuvucService],
    }).compile();

    service = module.get<KhuvucService>(KhuvucService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
