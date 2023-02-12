import { ApiProperty } from '@nestjs/swagger';

export class CreateGptTextGenDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  header: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  use: number;

  @ApiProperty()
  command: string;

  @ApiProperty()
  raiting: number;

  @ApiProperty()
  language: string;
}
