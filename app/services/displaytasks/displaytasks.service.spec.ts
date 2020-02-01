import { TestBed } from '@angular/core/testing';

import { DisplaytasksService } from './displaytasks.service';

describe('DisplaytasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaytasksService = TestBed.get(DisplaytasksService);
    expect(service).toBeTruthy();
  });
});
