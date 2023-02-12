import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateGptTextGenDto } from './dto/create-gpt-text-gen.dto';
import { UpdateGptTextGenDto } from './dto/update-gpt-text-gen.dto';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class GptTextGenService {
  constructor(private prisma: PrismaService) {}
  runGen = async (createGptTextGenDto: CreateGptTextGenDto) => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    console.log(createGptTextGenDto.description);

    const responseText = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: createGptTextGenDto.description,
      temperature: 0.1, // 0.5
      max_tokens: 250, // 1000
      top_p: 0, // 1
      frequency_penalty: 0.5, // 0.0
      presence_penalty: 0.1, // 0.6
      stop: [' Human:', ' AI:'],
    });
    // console.log('BACKEND RESULT:\n\n', responseText.data.choices[0].text);
    console.log(
      (createGptTextGenDto.command = responseText.data.choices[0].text),
    );

    return this.prisma.card.create({ data: createGptTextGenDto });
    // return responseText.data.choices[0].text;
  };

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
