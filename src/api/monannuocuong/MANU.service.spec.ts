import { Test, TestingModule } from '@nestjs/testing';
import { MANUService } from './MANU.service';

describe('MonanService', () => {
  let service: MANUService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MANUService],
    }).compile();

    service = module.get<MANUService>(MANUService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
