import { NestFactory } from '@nestjs/core';
import { RevervationsModule } from './revervations.module';

async function bootstrap() {
  const app = await NestFactory.create(RevervationsModule);
  await app.listen(3000);
}
bootstrap();
