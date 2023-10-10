import { Module } from '@nestjs/common';
import { MailParserService } from './services';
import { MailParserController } from './controllers';

@Module({
  imports: [],
  controllers: [MailParserController],
  providers: [MailParserService],
})
export class MailParserModule {}
