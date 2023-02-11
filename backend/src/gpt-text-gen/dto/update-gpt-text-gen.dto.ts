import { PartialType } from '@nestjs/swagger';
import { CreateGptTextGenDto } from './create-gpt-text-gen.dto';

export class UpdateGptTextGenDto extends PartialType(CreateGptTextGenDto) {}
