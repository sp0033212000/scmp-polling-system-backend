import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './service/prisma/prisma.service';
import { PollModule } from './resource/poll/poll.module';
import { AnswerModule } from './resource/answer/answer.module';
import { OptionModule } from './resource/option/option.module';
import { VoteModule } from './resource/vote/vote.module';
import { PollService } from './resource/poll/poll.service';
import { AnswerService } from './resource/answer/answer.service';
import { OptionService } from './resource/option/option.service';
import { VoteService } from './resource/vote/vote.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { SerializeInterceptor } from 'serialize-interceptor';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PollModule,
    AnswerModule,
    OptionModule,
    VoteModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: SerializeInterceptor,
    },
    AppService,
    PrismaService,
    PollService,
    AnswerService,
    OptionService,
    VoteService,
  ],
  exports: [
    PrismaService,
    PollService,
    AnswerService,
    OptionService,
    VoteService,
  ],
})
export class AppModule {}
