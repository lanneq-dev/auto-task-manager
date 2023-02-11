import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokerbotService } from './pokerbot.service';
import { CreatePokerbotDto } from './dto/create-pokerbot.dto';
import { UpdatePokerbotDto } from './dto/update-pokerbot.dto';

@Controller('pokerbot')
export class PokerbotController {
  constructor(private readonly pokerbotService: PokerbotService) {}

  @Post()
  create(@Body() createPokerbotDto: CreatePokerbotDto) {
    return this.pokerbotService.create(createPokerbotDto);
  }

  @Get()
  findAll() {
    return this.pokerbotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pokerbotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokerbotDto: UpdatePokerbotDto) {
    return this.pokerbotService.update(+id, updatePokerbotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokerbotService.remove(+id);
  }
}
