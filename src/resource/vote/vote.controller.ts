import { Body, Controller, Ip, Post } from '@nestjs/common';
import { VoteService } from './vote.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateVoteDto } from './dto/create-vote.dto';
import { VotedCheckDto } from './dto/voted-check.dto';
import { VotedCheckEntity } from './entities/voted-check.entity';

@ApiTags('VoteApi')
@Controller('vote')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post('')
  @ApiBody({
    type: CreateVoteDto,
  })
  @ApiOperation({
    tags: ['vote'],
    summary: 'Vote for a poll',
    operationId: 'vote',
  })
  vote(@Body() body: CreateVoteDto, @Ip() ip: string) {
    return this.voteService.vote(body, ip);
  }

  @Post('voted-check')
  @ApiBody({
    type: VotedCheckDto,
  })
  @ApiResponse({
    type: VotedCheckEntity,
    status: 200,
  })
  @ApiOperation({
    tags: ['votedCheck'],
    summary: 'Check if user has voted for a poll',
    operationId: 'votedCheck',
  })
  votedCheck(
    @Body() body: VotedCheckDto,
    @Ip() ip: string,
  ): Promise<VotedCheckEntity> {
    return this.voteService.votedCheck(body, ip);
  }
}
