import { Injectable } from '@nestjs/common';

@Injectable()
export class RevervationsService {
  getHello(): string {
    return 'Hello World!';
  }
}
