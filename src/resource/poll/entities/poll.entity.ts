import { type poll } from '@prisma/client';
import { AnswerEntity } from '../../answer/entities/answer.entity';
import { ApiProperty } from '@nestjs/swagger';
import { VoteEntity } from '../../vote/entities/vote.entity';

export class PollEntity implements poll {
  @ApiProperty({ type: Number })
  id: number;
  @ApiProperty({ type: String })
  title: string;
  @ApiProperty({ type: Number })
  published_date: number;

  @ApiProperty({ type: Number })
  answer_id: number;
  @ApiProperty({ type: AnswerEntity })
  answer: AnswerEntity;

  @ApiProperty({ type: VoteEntity })
  vote: VoteEntity;
}
