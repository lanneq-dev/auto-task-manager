import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GptTextGenService } from './gpt-text-gen.service';
import { CreateGptTextGenDto } from './dto/create-gpt-text-gen.dto';
import { UpdateGptTextGenDto } from './dto/update-gpt-text-gen.dto';

@Controller('gen')
export class GptTextGenController {
  constructor(private readonly gptTextGenService: GptTextGenService) {}

  @Post()
  create(@Body() createGptTextGenDto: CreateGptTextGenDto) {
    return this.gptTextGenService.runGen(createGptTextGenDto);
  }

  @Get()
  findAll() {
    return this.gptTextGenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gptTextGenService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGptTextGenDto: UpdateGptTextGenDto,
  ) {
    return this.gptTextGenService.update(+id, updateGptTextGenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gptTextGenService.remove(+id);
  }
}
