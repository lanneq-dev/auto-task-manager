import { Injectable } from '@nestjs/common';
import { CreatePokerbotDto } from './dto/create-pokerbot.dto';
import { UpdatePokerbotDto } from './dto/update-pokerbot.dto';

@Injectable()
export class PokerbotService {
  create(createPokerbotDto: CreatePokerbotDto) {
    return 'This action adds a new pokerbot';
  }

  findAll() {
    return `This action returns all pokerbot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokerbot`;
  }

  update(id: number, updatePokerbotDto: UpdatePokerbotDto) {
    return `This action updates a #${id} pokerbot`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokerbot`;
  }
}
