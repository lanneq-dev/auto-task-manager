import { Test, TestingModule } from '@nestjs/testing';
import { GptTextGenController } from './gpt-text-gen.controller';
import { GptTextGenService } from './gpt-text-gen.service';

describe('GptTextGenController', () => {
  let controller: GptTextGenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptTextGenController],
      providers: [GptTextGenService],
    }).compile();

    controller = module.get<GptTextGenController>(GptTextGenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
