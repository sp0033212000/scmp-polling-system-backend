import {
  type answer,
  type AnswerType as EAnswerType,
  AnswerType,
} from '@prisma/client';
import { OptionEntity } from '../../option/entities/option.entity';
import { ApiProperty } from '@nestjs/swagger';
import { PollEntity } from '../../poll/entities/poll.entity';
import { VoteEntity } from '../../vote/entities/vote.entity';

export class AnswerEntity implements answer {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: PollEntity })
  poll: PollEntity;
  @ApiProperty({ type: Number })
  poll_id: number;

  @ApiProperty({
    enum: AnswerType,
  })
  type: EAnswerType;

  @ApiProperty({ type: OptionEntity, isArray: true })
  options: Array<OptionEntity>;

  @ApiProperty({ type: VoteEntity, isArray: true })
  vote: Array<VoteEntity>;
}
