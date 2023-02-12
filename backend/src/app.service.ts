import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { CreateTaskDto } from './task/dto/create-task.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'hello!';
  }
}
