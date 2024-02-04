import { ApiProperty } from '@nestjs/swagger';

export class VotedCheckDto {
  @ApiProperty({
    type: Number,
  })
  poll_id: number;
}
