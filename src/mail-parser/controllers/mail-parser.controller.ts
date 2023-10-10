import { Controller, Get, Param } from '@nestjs/common';
import { MailParserService } from '../services';

@Controller('mail-parser')
export class MailParserController {
  constructor(private readonly appService: MailParserService) {}

  @Get(':filepath')
  async getEmailAttachment(@Param('filepath') filepath: string): Promise<string|Array<object>> {
    return await this.appService.getEmailAttachment(filepath);
  }
}
