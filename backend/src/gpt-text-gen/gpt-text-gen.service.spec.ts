import { Test, TestingModule } from '@nestjs/testing';
import { GptTextGenService } from './gpt-text-gen.service';

describe('GptTextGenService', () => {
  let service: GptTextGenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptTextGenService],
    }).compile();

    service = module.get<GptTextGenService>(GptTextGenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
