import { Test, TestingModule } from '@nestjs/testing';
import { KhuvucController } from './khuvuc.controller';

describe('KhuvucController', () => {
  let controller: KhuvucController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhuvucController],
    }).compile();

    controller = module.get<KhuvucController>(KhuvucController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
