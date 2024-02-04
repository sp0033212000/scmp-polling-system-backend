import { ApiProperty } from '@nestjs/swagger';

export class VotedCheckEntity {
  @ApiProperty({
    type: Boolean,
  })
  voted: boolean;
}
