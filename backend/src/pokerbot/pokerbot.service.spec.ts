import { Test, TestingModule } from '@nestjs/testing';
import { PokerbotService } from './pokerbot.service';

describe('PokerbotService', () => {
  let service: PokerbotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokerbotService],
    }).compile();

    service = module.get<PokerbotService>(PokerbotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
