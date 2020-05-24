import { TestBed } from '@angular/core/testing';

import { SfjService } from './sfj.service';

describe('SfjService', () => {
  let service: SfjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
