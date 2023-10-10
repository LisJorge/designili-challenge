import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { EmailContentDto } from '../dtos';

@Injectable()
export class MailerService {
  getEmailContent(emailContent: any): string{
    const rawRecords = emailContent.Records;
    const formattedData = rawRecords.map((record) => (plainToInstance(EmailContentDto, record.ses)))
    return formattedData
  }
}
