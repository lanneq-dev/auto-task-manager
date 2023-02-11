import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { CreateTaskDto } from './task/dto/create-task.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  runGen = async (createTaskDto: CreateTaskDto) => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const responseText = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: createTaskDto.body,
      temperature: 0.9,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [' Human:', ' AI:'],
    });
    console.log(responseText.data.choices[0].text);
    return responseText.data.choices[0].text;
  };

  getHello(): string {
    return 'hello!';
  }
}
