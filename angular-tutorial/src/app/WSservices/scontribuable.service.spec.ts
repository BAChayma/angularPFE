import { TestBed } from '@angular/core/testing';

import { ScontribuableService } from './scontribuable.service';

describe('ScontribuableService', () => {
  let service: ScontribuableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScontribuableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
