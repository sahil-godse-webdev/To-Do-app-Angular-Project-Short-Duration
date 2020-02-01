import { TestBed } from '@angular/core/testing';

import { SavetasktodbService } from './savetasktodb.service';

describe('SavetasktodbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavetasktodbService = TestBed.get(SavetasktodbService);
    expect(service).toBeTruthy();
  });
});
