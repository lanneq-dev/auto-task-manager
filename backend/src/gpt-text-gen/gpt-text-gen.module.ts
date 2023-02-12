import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { GptTextGenService } from './gpt-text-gen.service';
import { GptTextGenController } from './gpt-text-gen.controller';

@Module({
  controllers: [GptTextGenController],
  providers: [GptTextGenService],
  imports: [PrismaModule],
})
export class GptTextGenModule {}
