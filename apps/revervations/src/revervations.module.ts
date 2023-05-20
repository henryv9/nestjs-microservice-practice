import { Module } from '@nestjs/common';
import { RevervationsController } from './revervations.controller';
import { RevervationsService } from './revervations.service';

@Module({
  imports: [],
  controllers: [RevervationsController],
  providers: [RevervationsService],
})
export class RevervationsModule {}
