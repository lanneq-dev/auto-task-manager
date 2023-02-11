import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { TaskModule } from './task/task.module';
import { GptTextGenModule } from './gpt-text-gen/gpt-text-gen.module';
import { PokerbotModule } from './pokerbot/pokerbot.module';

@Module({
  imports: [PrismaModule, ArticlesModule, TaskModule, PokerbotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
