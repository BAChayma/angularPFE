import { TestBed } from '@angular/core/testing';

import { SformuleService } from './sformule.service';

describe('SformuleService', () => {
  let service: SformuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SformuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
