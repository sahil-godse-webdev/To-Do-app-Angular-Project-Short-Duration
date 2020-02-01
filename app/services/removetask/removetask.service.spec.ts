import { TestBed } from '@angular/core/testing';

import { RemovetaskService } from './removetask.service';

describe('RemovetaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemovetaskService = TestBed.get(RemovetaskService);
    expect(service).toBeTruthy();
  });
});
