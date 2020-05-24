import { TestBed } from '@angular/core/testing';

import { SaeService } from './sae.service';

describe('SaeService', () => {
  let service: SaeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
