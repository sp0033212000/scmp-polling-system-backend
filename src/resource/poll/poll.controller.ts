import { Controller, Get } from '@nestjs/common';
import { PollService } from './poll.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PollDetailEntity } from './entities/poll-detail.entity';

@ApiTags('PollApi')
@Controller('poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Get('all')
  @ApiResponse({
    type: PollDetailEntity,
    isArray: true,
    status: 200,
  })
  @ApiOperation({
    summary: 'Get all polls',
    operationId: 'findAll',
  })
  findAll(): Promise<Array<PollDetailEntity>> {
    return this.pollService.findAll();
  }
}
