import { Test, TestingModule } from '@nestjs/testing';
import { GirlsController } from './girls.controller';

describe('GirlsController', () => {
  let controller: GirlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GirlsController],
    }).compile();

    controller = module.get<GirlsController>(GirlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
