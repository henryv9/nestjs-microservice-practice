import { Test, TestingModule } from '@nestjs/testing';
import { RevervationsController } from './revervations.controller';
import { RevervationsService } from './revervations.service';

describe('RevervationsController', () => {
  let revervationsController: RevervationsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RevervationsController],
      providers: [RevervationsService],
    }).compile();

    revervationsController = app.get<RevervationsController>(RevervationsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(revervationsController.getHello()).toBe('Hello World!');
    });
  });
});
