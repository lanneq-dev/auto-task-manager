import { Module } from '@nestjs/common';
import { PokerbotService } from './pokerbot.service';
import { PokerbotController } from './pokerbot.controller';

@Module({
  controllers: [PokerbotController],
  providers: [PokerbotService]
})
export class PokerbotModule {}
