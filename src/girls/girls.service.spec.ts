import { Test, TestingModule } from '@nestjs/testing';
import { GirlsService } from './girls.service';

describe('GirlsService', () => {
  let service: GirlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GirlsService],
    }).compile();

    service = module.get<GirlsService>(GirlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
