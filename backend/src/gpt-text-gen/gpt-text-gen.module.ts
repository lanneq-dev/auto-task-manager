import { Module } from '@nestjs/common';
import { GptTextGenService } from './gpt-text-gen.service';
import { GptTextGenController } from './gpt-text-gen.controller';

@Module({
  controllers: [GptTextGenController],
  providers: [GptTextGenService],
})
export class GptTextGenModule {}
