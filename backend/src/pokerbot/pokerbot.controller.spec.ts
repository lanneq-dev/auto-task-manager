import { Test, TestingModule } from '@nestjs/testing';
import { PokerbotController } from './pokerbot.controller';
import { PokerbotService } from './pokerbot.service';

describe('PokerbotController', () => {
  let controller: PokerbotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokerbotController],
      providers: [PokerbotService],
    }).compile();

    controller = module.get<PokerbotController>(PokerbotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
