import { Test, TestingModule } from '@nestjs/testing';
import { MonAnController } from './monAn.controller';

describe('MonanController', () => {
  let controller: MonAnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonAnController],
    }).compile();

    controller = module.get<MonAnController>(MonAnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
