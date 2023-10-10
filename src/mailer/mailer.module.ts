import { Module } from '@nestjs/common';
import { MailerService } from './services';
import { MailerController } from './controllers';

@Module({
  imports: [],
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}
