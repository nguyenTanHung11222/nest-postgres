import { Test, TestingModule } from '@nestjs/testing';
import { MANUController } from './MANU.controller';

describe('MonanController', () => {
  let controller: MANUController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MANUController],
    }).compile();

    controller = module.get<MANUController>(MANUController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
