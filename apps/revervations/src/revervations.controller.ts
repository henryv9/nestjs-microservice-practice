import { Controller, Get } from '@nestjs/common';
import { RevervationsService } from './revervations.service';

@Controller()
export class RevervationsController {
  constructor(private readonly revervationsService: RevervationsService) {}

  @Get()
  getHello(): string {
    return this.revervationsService.getHello();
  }
}
