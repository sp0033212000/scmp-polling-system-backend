import { ApiProperty } from '@nestjs/swagger';

export class CreateVoteDto {
  @ApiProperty({
    type: Number,
  })
  poll_id: number;

  @ApiProperty({
    type: Number,
  })
  answer_id: number;

  @ApiProperty({
    type: Number,
  })
  option_id: number;
}
