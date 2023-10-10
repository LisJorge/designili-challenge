import { Injectable } from '@nestjs/common';
import * as mailparser from 'mailparser';
import { extractJsonFromLink, getLinksFromString } from '../helpers';

@Injectable()
export class MailParserService {
    async getEmailAttachment(filepath: string): Promise<string|Array<object>> {
        const mailParsed = await mailparser.simpleParser(filepath);
        const links = mailParsed.text || mailParsed.html || '';
        const jsonAttachment = mailParsed.attachments.find(
          (attachment) => attachment.contentType === 'application/json'
        ).content.toString();

        if(jsonAttachment.length === 0 && !!links){
            const linksFromEmail = getLinksFromString(links)
            const linkContent = linksFromEmail.map((link) => extractJsonFromLink(link));
            return linkContent;
        }

        if(jsonAttachment)
 
        return jsonAttachment;
      }
}
