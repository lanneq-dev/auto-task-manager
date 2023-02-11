import { PrismaService } from './../prisma/prisma.service';
import { Body, Injectable } from '@nestjs/common';
import { CreateGptTextGenDto } from './dto/create-gpt-text-gen.dto';
import { UpdateGptTextGenDto } from './dto/update-gpt-text-gen.dto';

@Injectable()
export class GptTextGenService {
  constructor(private prisma: PrismaService) {}
  create(createGptTextGenDto: CreateGptTextGenDto) {
    return `?`;
  }

  findAll() {
    return `This action returns all gptTextGen`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gptTextGen`;
  }

  update(id: number, updateGptTextGenDto: UpdateGptTextGenDto) {
    return `This action updates a #${id} gptTextGen`;
  }

  remove(id: number) {
    return `This action removes a #${id} gptTextGen`;
  }
}
