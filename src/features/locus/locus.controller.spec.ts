import { Test, TestingModule } from '@nestjs/testing';
import { LocusController } from './locus.controller';

describe('LocusController', () => {
  let controller: LocusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocusController],
    }).compile();

    controller = module.get<LocusController>(LocusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
