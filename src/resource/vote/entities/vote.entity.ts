import { type vote } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class VoteEntity implements vote {
  @ApiProperty({ type: Number })
  id: number;

  // @ApiProperty({ type: PollEntity })
  // poll: PollEntity;
  @ApiProperty({ type: Number })
  poll_id: number;

  // @ApiProperty({ type: AnswerEntity })
  // answer: AnswerEntity;
  @ApiProperty({ type: Number })
  answer_id: number;

  // @ApiProperty({ type: OptionEntity })
  // option: OptionEntity;
  @ApiProperty({ type: Number })
  option_id: number;

  @ApiProperty({ type: String })
  ip: string;
  @ApiProperty({ type: Number })
  voted_date: number;
}
