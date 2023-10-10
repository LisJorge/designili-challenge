export function getLinksFromString(emailContent: string): string[] {
    const urlRegex = /(https?:\/\/[^\s]+)/g;  
    const links = emailContent.match(urlRegex) || [];
    return links;
  }
  