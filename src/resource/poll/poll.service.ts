import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../service/prisma/prisma.service';
import { PollDetailEntity } from './entities/poll-detail.entity';

@Injectable()
export class PollService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    const result = await this.prismaService.poll.findMany({
      include: {
        answer: {
          select: {
            id: true,
            type: true,
            options: {
              select: {
                id: true,
                label: true,
              },
              orderBy: {
                id: 'asc',
              },
            },
          },
        },
        vote: {
          select: {
            id: true,
            answer_id: true,
            voted_date: true,
          },
        },
      },
    });

    return Promise.all<PollDetailEntity>(
      result.map(async (poll) => {
        const options = await Promise.all(
          poll.answer.options.map(async (option) => {
            const count = await this.prismaService.vote.count({
              where: {
                answer_id: poll.answer.id,
                option_id: option.id,
                poll_id: poll.id,
              },
            });
            return { ...option, count };
          }),
        );
        return { ...poll, answer: { ...poll.answer, options } };
      }),
    );
  }
}
