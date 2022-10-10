import { Test, TestingModule } from '@nestjs/testing';
import { NuocUongController } from './NuocUong.controller';

describe('MonanController', () => {
  let controller: NuocUongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NuocUongController],
    }).compile();

    controller = module.get<NuocUongController>(NuocUongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
