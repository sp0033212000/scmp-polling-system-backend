import { ApiProperty, PickType } from '@nestjs/swagger';
import { PollEntity } from './poll.entity';
import { OptionEntity } from '../../option/entities/option.entity';
import { VoteEntity } from '../../vote/entities/vote.entity';
import { AnswerEntity } from '../../answer/entities/answer.entity';

export class OptionForPollDetail extends PickType(OptionEntity, [
  'id',
  'label',
]) {
  @ApiProperty({ type: Number })
  count: number;
}

class AnswerForPollDetail extends PickType(AnswerEntity, ['id', 'type']) {
  @ApiProperty({ type: OptionForPollDetail, isArray: true })
  options: OptionForPollDetail[];
}

class VoteForPollDetail extends PickType(VoteEntity, [
  'id',
  'answer_id',
  'voted_date',
]) {}

export class PollDetailEntity extends PickType(PollEntity, [
  'id',
  'title',
  'published_date',
]) {
  @ApiProperty({ type: AnswerForPollDetail })
  answer: AnswerForPollDetail;

  @ApiProperty({ type: VoteForPollDetail, isArray: true })
  vote: Array<VoteForPollDetail>;
}
