import { Body, Controller, Get } from '@nestjs/common';
import { MailerService } from '../services';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Get()
  getEmailContent(@Body() emailContent: any): string {
    return this.mailerService.getEmailContent(emailContent);
  }
}
