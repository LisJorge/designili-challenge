import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from './mailer/mailer.module';
import { MailParserModule } from './mail-parser/mail-parser.module';

@Module({
  imports: [MailerModule, MailParserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
