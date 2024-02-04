import { type option } from '@prisma/client';
import { AnswerEntity } from '../../answer/entities/answer.entity';
import { VoteEntity } from '../../vote/entities/vote.entity';
import { ApiProperty } from '@nestjs/swagger';

export class OptionEntity implements option {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: AnswerEntity })
  answer: AnswerEntity;
  answer_id: number;

  @ApiProperty({ type: String })
  label: string;

  @ApiProperty({ type: VoteEntity, isArray: true })
  vote: Array<VoteEntity>;
}
