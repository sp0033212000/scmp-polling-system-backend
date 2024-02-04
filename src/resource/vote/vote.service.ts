import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../service/prisma/prisma.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { VotedCheckDto } from './dto/voted-check.dto';
import { VotedCheckEntity } from './entities/voted-check.entity';

@Injectable()
export class VoteService {
  constructor(private readonly prismaService: PrismaService) {}

  async vote({ poll_id, answer_id, option_id }: CreateVoteDto, ip: string) {
    const hasVoted = await this.prismaService.vote.findFirst({
      where: {
        poll_id,
        ip,
      },
    });
    if (hasVoted) {
      throw new HttpException('You have already voted', 400);
    } else {
      return this.prismaService.vote.create({
        data: {
          poll_id,
          answer_id,
          option_id,
          ip,
          voted_date: new Date().getTime() / 1000,
        },
      });
    }
  }

  async votedCheck(
    { poll_id }: VotedCheckDto,
    ip: string,
  ): Promise<VotedCheckEntity> {
    const voted = await this.prismaService.vote.findFirst({
      where: {
        poll_id,
        ip,
      },
    });

    return {
      voted: !!voted,
    };
  }
}
