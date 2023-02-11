import { CreateTaskDto } from './task/dto/create-task.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('gen')
  async runGen(@Body() createTaskDto: CreateTaskDto) {
    return this.appService.runGen(createTaskDto);
  }
}
