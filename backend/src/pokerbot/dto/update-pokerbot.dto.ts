import { PartialType } from '@nestjs/swagger';
import { CreatePokerbotDto } from './create-pokerbot.dto';

export class UpdatePokerbotDto extends PartialType(CreatePokerbotDto) {}
