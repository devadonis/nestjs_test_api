import { Test, TestingModule } from '@nestjs/testing';
import { LocusService } from './locus.service';

describe('LocusService', () => {
  let service: LocusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocusService],
    }).compile();

    service = module.get<LocusService>(LocusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
